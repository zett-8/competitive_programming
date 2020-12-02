const itbs = require('./intToBinaryString')

describe('intToBinaryString function', () => {
  test('should work without specifying length', () => {
    expect(itbs(4)).toBe('100')
    expect(itbs(0)).toBe('0')
    expect(itbs(41013)).toBe('1010000000110101')
  })

  test('should work with length arg', () => {
    expect(itbs(2, 10)).toBe('0000000010')
    expect(itbs(4, 6)).toBe('000100')
  })

  test('should return valid binary when length arg is not proper', () => {
    expect(itbs(41013, 2)).toBe('1010000000110101')
    expect(itbs(16, 2)).toBe('10000')
  })
})
