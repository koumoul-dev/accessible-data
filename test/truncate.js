const assert = require('assert').strict

const workers = require('../server/workers')

describe('truncate', () => {
  it('Truncate results for faster previews', async () => {
    const ax = global.ax.dmeadus
    let res = await ax.post('/api/v1/datasets', {
      isRest: true,
      title: 'truncate1',
      schema: [{ key: 'str', type: 'string' }],
    })
    res = await ax.post('/api/v1/datasets/truncate1/lines', { str: 'bla' })
    res = await ax.post('/api/v1/datasets/truncate1/lines', { str: 'blablabla' })
    await workers.hook('indexer/truncate1')
    res = await ax.get('/api/v1/datasets/truncate1/lines', { params: { truncate: '4' } })
    assert.equal(res.data.results.length, 2)
    assert.equal(res.data.results[1].str, 'bla')
    assert.equal(res.data.results[0].str, 'blab...')
  })
})
