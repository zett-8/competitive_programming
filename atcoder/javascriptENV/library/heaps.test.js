const heaps = require('./heaps')

describe('heaps test', () => {
  let hp
  beforeEach(() => {
    hp = heaps()
  })

  it('test case 1', () => {
    expect(hp.n.length).toBe(1)
    expect(hp.n[0]).toBeNull()
  })

  it('test case 2', () => {
    expect(hp.remove()).toBeNull()
  })

  it('test case 3', () => {
    hp.add(2)
    hp.add(3)
    expect(hp.n[1]).toBe(3)
    expect(hp.n[2]).toBe(2)

    hp.add(1)
    expect(hp.n[1]).toBe(3)

    hp.add(5)
    expect(hp.n[1]).toBe(5)
  })

  it('test case 4', () => {
    expect(hp.remove()).toBeNull()

    hp.add(4)
    expect(hp.remove()).toBe(4)
    expect(hp.remove()).toBeNull()

    hp.add(3)
    hp.add(5)
    expect(hp.remove()).toBe(5)
    expect(hp.remove()).toBe(3)
  })

  it('test case 5', () => {
    hp.add(2)
    hp.add(6)
    hp.add(3)
    hp.add(11)
    hp.add(8)

    expect(hp.remove()).toBe(11)
    expect(hp.remove()).toBe(8)
    expect(hp.remove()).toBe(6)
    expect(hp.remove()).toBe(3)
    expect(hp.remove()).toBe(2)
    expect(hp.remove()).toBeNull()
  })

  it('test case 6', () => {
    hp.add(3)
    hp.add(3)
    hp.add(5)
    hp.add(3)
    hp.add(4)
    hp.add(5)
    hp.add(4)

    expect(hp.remove()).toBe(5)
    expect(hp.remove()).toBe(5)
    expect(hp.remove()).toBe(4)
    expect(hp.remove()).toBe(4)
    expect(hp.remove()).toBe(3)
    expect(hp.remove()).toBe(3)
    expect(hp.remove()).toBe(3)
    expect(hp.remove()).toBeNull()
  })

  it('test case 7', () => {
    hp.add(2)
    hp.add(3)
    hp.add(4)
    hp.add(6)
    expect(hp.sum).toBe(15)

    hp.remove()
    expect(hp.sum).toBe(9)
  })
})
