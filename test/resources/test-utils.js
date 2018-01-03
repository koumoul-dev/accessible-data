const test = require('ava')
const axios = require('axios')
const fs = require('fs-extra')
const path = require('path')

const testDir = path.join(__dirname, '../')
const testFiles = fs.readdirSync(testDir).map(f => path.join(testDir, f))

exports.prepare = (testFile) => {
  const key = path.basename(testFile, '.js')
  const port = 5800 + testFiles.indexOf(testFile)
  const dataDir = './data/test-' + key
  process.env.NODE_CONFIG = JSON.stringify({
    port: port,
    publicUrl: 'http://localhost:' + port,
    dataDir,
    mongoUrl: 'mongodb://localhost:27017/accessible-data-test-' + key,
    indicesPrefix: 'dataset-test-' + key
  })
  const config = require('config')

  let app
  test.cb.before('run app', t => {
    app = require('../../server/app.js')
    app.on('listening', t.end)
  })

  test.before('drop db', async t => {
    await app.get('db').dropDatabase()
  })

  test.before('drop ES indices', async t => {
    await app.get('es').indices.delete({index: `dataset-${key}-*`, ignore: [404]})
  })

  test.before('remove test data', async t => {
    await fs.remove(dataDir)
  })

  test.after('drop db', async t => {
    await app.get('db').dropDatabase()
  })

  test.after('drop ES indices', async t => {
    await app.get('es').indices.delete({index: `dataset-${key}-*`, ignore: [404]})
  })

  test.after('remove test data', async t => {
    await fs.remove(dataDir)
  })

  return [test, config]
}

const axiosInstances = {}
exports.axios = async (email) => {
  const config = require('config')
  if (!email) {
    const ax = axios.create({baseURL: config.publicUrl})
    // customize axios errors for shorter stack traces when a request fails in a test
    ax.interceptors.response.use(response => response, error => {
      delete error.response.request
      return Promise.reject(error.response)
    })
    return ax
  }
  if (axiosInstances[email]) return axiosInstances[email]
  const res = await axios.post('http://localhost:5700/api/auth/passwordless', {email}, {withCredentials: true})
  const idTokenCookie = res.headers['set-cookie'][0]
  const ax = axios.create({baseURL: config.publicUrl,
    headers: {
      'Cookie': idTokenCookie
    }})
  // customize axios errors for shorter stack traces when a request fails in a test
  ax.interceptors.response.use(response => response, error => {
    delete error.response.request
    return Promise.reject(error.response)
  })
  axiosInstances[email] = ax
  return ax
}

exports.formHeaders = (form, organizationId) => {
  const headers = {'Content-Length': form.getLengthSync(), ...form.getHeaders()}
  if (organizationId) headers['x-organizationId'] = organizationId
  return headers
}
