const zAlgorithm = require('./zAlgorithm')

describe('Z algorithm test', () => {
  it('test case 1', () => {
    const s = 'aa'
    const ans = [0, 1]
    expect(zAlgorithm(s).array).toEqual(ans)
    expect(zAlgorithm(s).max).toBe(1)
  })

  it('test case 2', () => {
    const s = 'abuaadkaabugabu'
    const ans = [0, 0, 0, 1, 1, 0, 0, 1, 3, 0, 0, 0, 3, 0, 0]
    expect(zAlgorithm(s).array).toEqual(ans)
    expect(zAlgorithm(s).max).toEqual(3)
  })

  it('test case 1', () => {
    const s = 'ababa'
    const ans = [0, 0, 2, 0, 1]
    expect(zAlgorithm(s).array).toEqual(ans)
    expect(zAlgorithm(s).max).toEqual(2)
  })
})
