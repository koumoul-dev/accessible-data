// schematize dataset data and try to guess the schém
const datasetUtils = require('../utils/dataset')
const fieldsSniffer = require('../utils/fields-sniffer')

exports.eventsPrefix = 'schematize'

exports.process = async function(app, dataset) {
  const debug = require('debug')(`worker:csv-schematizer:${dataset.id}`)
  const db = app.get('db')

  // get a random sampling to test values type on fewer elements
  debug('extract dataset sample')
  const sample = await datasetUtils.sample(dataset)
  const firstLine = sample.pop()
  if (!firstLine) throw new Error('Èchec de l\'échantillonage des données')

  // Convert an array of objects to an object of sets
  // Each set will hold the differents values for each field
  const myCSVObject = sample.reduce((acc, current) => {
    // TODO We should not add items to the set if it's size is > 100 or the item's length > 50 (numbers may be tweaked)
    Object.keys(acc).forEach(k => acc[k].add(current[k]))
    return acc
  }, Object.assign({}, ...Object.keys(firstLine).map(k => ({
    [k]: new Set([firstLine[k]]),
  }))))
  debug('list attachments')
  // Now we can extract infos for each field
  const attachments = await datasetUtils.lsAttachments(dataset)
  Object.keys(myCSVObject).forEach(field => {
    const existingField = dataset.file.schema.find(f => f.key === fieldsSniffer.escapeKey(field))
    if (!existingField) throw new Error(`Field ${field} found in data sample but absent from previous schema analysis`)
    Object.assign(existingField, fieldsSniffer.sniff(myCSVObject[field], attachments))
  })

  dataset.schema = dataset.schema || []
  // Remove fields present in the stored schema, when absent from the raw file schema and not coming from extension
  dataset.schema = dataset.schema.filter(field => field['x-extension'] || dataset.file.schema.find(f => f.key === field.key))
  // Add fields not yet present in the stored schema
  dataset.schema = dataset.schema.concat(dataset.file.schema.filter(field => !dataset.schema.find(f => f.key === field.key)))
  // Update fields that changed
  dataset.schema.forEach(field => {
    const fileField = dataset.file.schema.find(f => f.key === field.key)
    if (fileField && (fileField.type !== field.type || fileField.format !== field.format)) {
      field.type = fileField.type
      field.format = fileField.format
    }
  })

  debug('store status as schematized')
  dataset.status = 'schematized'
  await db.collection('datasets').updateOne({ id: dataset.id }, {
    $set: { status: 'schematized', schema: dataset.schema, file: dataset.file },
  })
}
