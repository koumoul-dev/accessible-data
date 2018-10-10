const shortid = require('shortid')
const config = require('config')
const pid = shortid.generate()

let interval
exports.init = async db => {
  const locks = db.collection('locks')
  await locks.createIndex({ pid: 1 })
  try {
    await locks.createIndex({ updatedAt: 1 }, { expireAfterSeconds: config.locks.ttl })
  } catch (err) {
    console.log('Failure to create TTL index. Probably because the value changed. Try to update it.')
    db.command({ collMod: 'locks', index: { keyPattern: { updatedAt: 1 }, expireAfterSeconds: config.locks.ttl } })
  }

  // prolongate lock acquired by this process while it is still active
  interval = setInterval(() => {
    locks.updateOne({ pid }, { '$currentDate': { updatedAt: true } })
  }, (config.locks.ttl / 2) * 1000)
}

exports.stop = () => {
  clearInterval(interval)
}

exports.acquire = async (db, _id) => {
  const locks = db.collection('locks')
  try {
    await locks.insertOne({ _id, pid })
    await locks.updateOne({ _id }, { '$currentDate': { updatedAt: true } })
    return true
  } catch (err) {
    if (err.code !== 11000) throw err
    // duplicate means the lock was already acquired
    return false
  }
}

exports.release = async (db, _id) => {
  const locks = db.collection('locks')
  await locks.remove({ _id, pid })
}
