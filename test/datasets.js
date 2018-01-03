const fs = require('fs')
const FormData = require('form-data')
const testUtils = require('./resources/test-utils')
const eventToPromise = require('event-to-promise')

const [test] = testUtils.prepare(__filename)

let notifier
test.before('run app', async t => {
  notifier = require('./resources/app-notifier.js')
  await eventToPromise(notifier, 'listening')
})

test('Get datasets when not authenticated', async t => {
  const ax = await testUtils.axios()
  const res = await ax.get('/api/v1/datasets')
  t.is(res.status, 200)
  t.is(res.data.count, 0)
})

test('Failure to get datasets with bad auth', async t => {
  const ax = await testUtils.axios()
  try {
    await ax.get('/api/v1/datasets', {headers: {Authorization: 'badtoken'}})
    t.fail()
  } catch (err) {
    t.is(err.status, 401)
  }
})

test('Get datasets when authenticated', async t => {
  const ax = await testUtils.axios('dmeadus0@answers.com')
  const res = await ax.get('/api/v1/datasets')
  t.is(res.status, 200)
  t.is(res.data.count, 0)
})

const datasetFd = fs.readFileSync('./test/resources/dataset1.csv')

test('Failure to upload dataset exceeding limit', async t => {
  const ax = await testUtils.axios('dmeadus0@answers.com')
  const form = new FormData()
  form.append('file', Buffer.alloc(1200), 'largedataset.csv')
  try {
    await ax.post('/api/v1/datasets', form, {headers: testUtils.formHeaders(form)})
    t.fail()
  } catch (err) {
    t.is(err.status, 413)
  }
})

test('Failure to upload multiple datasets exceeding limit', async t => {
  const ax = await testUtils.axios('dmeadus0@answers.com')
  let form = new FormData()
  form.append('file', fs.readFileSync('./test/resources/Antennes du CD22.csv'), 'largedataset1.csv')
  await ax.post('/api/v1/datasets', form, {headers: testUtils.formHeaders(form)})

  form = new FormData()
  form.append('file', Buffer.alloc(900), 'largedataset2.csv')
  try {
    await ax.post('/api/v1/datasets', form, {headers: testUtils.formHeaders(form)})
    t.fail()
  } catch (err) {
    t.is(err.status, 429)
  }
})

test('Upload new dataset in user zone', async t => {
  const ax = await testUtils.axios('dmeadus0@answers.com')
  const form = new FormData()
  form.append('file', datasetFd, 'dataset1.csv')
  const res = await ax.post('/api/v1/datasets', form, {headers: testUtils.formHeaders(form)})
  t.is(res.status, 201)
  t.is(res.data.owner.type, 'user')
  t.is(res.data.owner.id, 'dmeadus0')
})

test('Upload new dataset in organization zone', async t => {
  const ax = await testUtils.axios('dmeadus0@answers.com')
  const form = new FormData()
  form.append('file', datasetFd, 'dataset2.csv')
  const res = await ax.post('/api/v1/datasets', form, {headers: testUtils.formHeaders(form, 'KWqAGZ4mG')})
  t.is(res.status, 201)
  t.is(res.data.owner.type, 'organization')
  t.is(res.data.owner.id, 'KWqAGZ4mG')
})

test('Uploading same file twice should increment id', async t => {
  const ax = await testUtils.axios('dmeadus0@answers.com')
  for (let i of [1, 2, 3]) {
    const form = new FormData()
    form.append('file', datasetFd, 'my-dataset.csv')
    const res = await ax.post('/api/v1/datasets', form, {headers: testUtils.formHeaders(form, 'KWqAGZ4mG')})
    t.is(res.status, 201)
    t.is(res.data.id, 'my-dataset' + (i === 1 ? '' : i))
  }
})

test('Fail to upload new dataset when not authenticated', async t => {
  const ax = await testUtils.axios()
  const form = new FormData()
  try {
    await ax.post('/api/v1/datasets', form, {headers: testUtils.formHeaders(form)})
    t.fail()
  } catch (err) {
    t.is(err.status, 401)
  }
})

test('Upload dataset - full test with webhooks', async t => {
  const ax = await testUtils.axios('cdurning2@desdev.cn')
  await ax.put('/api/v1/settings/user/cdurning2', {webhooks: [{title: 'test', events: ['index-end'], url: 'http://localhost:5900'}]})
  let form = new FormData()
  form.append('file', fs.readFileSync('./test/resources/Antennes du CD22.csv'), 'Antennes du CD22.csv')
  let res = await ax.post('/api/v1/datasets', form, {headers: testUtils.formHeaders(form)})
  t.is(res.status, 201)
  const webhook = await eventToPromise(notifier, 'webhook')
  res = await ax.get(webhook.href + '/api-docs.json')
  t.is(res.status, 200)
  t.is(res.data.openapi, '3.0.0')
  const datasetId = webhook.href.split('/').pop()
  res = await ax.get('/api/v1/journals/' + datasetId)
  t.is(res.status, 200)
  t.is(res.data.length, 7)
  form = new FormData()
  form.append('file', fs.readFileSync('./test/resources/Antennes du CD22.csv'), 'Antennes du CD22.csv')
  res = await ax.post(webhook.href, form, {headers: testUtils.formHeaders(form)})
  t.is(res.status, 200)
  await eventToPromise(notifier, 'webhook')
  res = await ax.get('/api/v1/journals/' + datasetId)
  t.is(res.data.length, 14)
})
