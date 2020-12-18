const bisect_left = require('./bisect_left')

describe('bisect left library tests', () => {
  it('basic pattern', () => {
    const arr = [0,10,20,30,40,50]
    expect(bisect_left(arr, 0)).toBe(0)
    expect(bisect_left(arr, 5)).toBe(1)
    expect(bisect_left(arr, 15)).toBe(2)
    expect(bisect_left(arr, 25)).toBe(3)
    expect(bisect_left(arr, 35)).toBe(4)
    expect(bisect_left(arr, 45)).toBe(5)
    expect(bisect_left(arr, 55)).toBe(6)
    expect(bisect_left(arr, 65)).toBe(6)
  })

  it('pattern 1', () => {
    const arr = [1,2,3,4,5]
    expect(bisect_left(arr, 1)).toBe(0)
  })

  it('pattern 2', () => {
    const arr = [1,2,3,4,5]
    expect(bisect_left(arr, 6)).toBe(5)
  })

  it('pattern 3', () => {
    const arr = [1,1,1,1,1]
    expect(bisect_left(arr, 1)).toBe(0)
  })

  it('pattern 4', () => {
    const arr = [1,2,2,2,5]
    expect(bisect_left(arr, 2)).toBe(1)
  })

  it('pattern 5', () => {
    const arr = [1,2,2,2,5]
    expect(bisect_left(arr, 5)).toBe(4)
  })

  it('pattern 6', () => {
    const arr = [1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]
    expect(bisect_left(arr, 378)).toBe(14)
  })
})
