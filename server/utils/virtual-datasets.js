const createError = require('http-errors')

// blacklisted fields are fields that are present in a grandchild but not re-exposed
// by the child.. it must not be possible to access those fields in the case
// of another child having the same key
async function childrenSchemas(db, children, blackListedFields) {
  let schemas = []
  for (let childId of children) {
    const child = await db.collection('datasets').findOne({ id: childId }, { fields: { isVirtual: 1, virtual: 1, schema: 1 } })
    if (child.isVirtual) {
      const grandChildrenSchemas = await childrenSchemas(db, child.virtual.children, blackListedFields)
      grandChildrenSchemas.forEach(s => s.forEach(field => {
        if (!child.schema.find(f => f.key === field.key)) blackListedFields.add(field.key)
      }))
      schemas.push(child.schema)
      schemas = schemas.concat(grandChildrenSchemas)
    } else {
      schemas.push(child.schema)
    }
  }
  return schemas
}

// Validate and fill a virtual dataset schema based on its children
exports.prepareSchema = async (db, schema, virtual) => {
  const blackListedFields = new Set([])
  const schemas = await childrenSchemas(db, virtual.children, blackListedFields)
  schema.forEach(field => {
    if (blackListedFields.has(field.key)) {
      throw createError(400, `Le champ "${field.key}" est interdit. Il est présent dans un jeu de données enfant mais est protégé.`)
    }
    const matchingFields = []
    schemas.forEach(s => s.filter(f => f.key === field.key).forEach(f => matchingFields.push(f)))
    if (!matchingFields.length) {
      throw createError(400, `Le champ "${field.key}" n'est présent dans aucun jeu de données enfant`)
    }
    field.type = field.type || matchingFields[0].type
    field.format = field.format || matchingFields[0].format || null
    matchingFields.forEach(f => {
      if (f.type !== field.type) throw createError(400, `Le champ "${field.key}" a des types contradictoires (${field.type}, ${f.type})`)
      if ((f.format || null) !== field.format) throw createError(400, `Le champ "${field.key}" a des formats contradictoires (${field.format}, ${f.format})`)
      field.title = field.title || f.title
      field.description = field.title || f.title
      field['x-refersTo'] = field['x-refersTo'] || f['x-refersTo']
    })
  })
  return schema
}

// Only non virtual descendants on which to perform the actual ES queries
exports.descendants = async (db, dataset) => {
  const res = await db.collection('datasets').aggregate([{
    $match: {
      id: dataset.id
    }
  }, {
    $graphLookup: {
      from: 'datasets',
      startWith: '$virtual.children',
      connectFromField: 'virtual.children',
      connectToField: 'id',
      as: 'descendants',
      maxDepth: 20
    }
  }, {
    $project: {
      'descendants.id': 1,
      'descendants.isVirtual': 1,
      'descendants.virtual': 1
    }
  }]).toArray()
  const virtualDescendantsWithFilters = res[0].descendants
    .filter(d => d.isVirtual && d.virtual.filters && d.virtual.filters.length)
  if (virtualDescendantsWithFilters.length) {
    throw new Error(`Le jeu de données virtuel ne peut pas être requêté, il agrège un autre jeu de données virtuel avec des filtres dont nous ne pouvons pas garantir l'application.`)
  }
  const physicalDescendants = res[0].descendants.filter(d => !d.isVirtual).map(d => d.id)
  if (physicalDescendants.length === 0) {
    throw new Error(`Le jeu de données virtuel ne peut pas être requêté, il n'agrège aucun jeu de données physique.`)
  }
  return physicalDescendants
}
