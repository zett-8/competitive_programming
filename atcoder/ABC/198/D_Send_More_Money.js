const main = (input) => {
  const [a, b, c] = input.trim().split('\n')
  const heads = [a[0], b[0], c[0]]

  const chars = [...new Set((a+b+c).split(''))]
  if (chars.length > 10) return 'UNSOLVABLE'

  const used = []

  return r(0) || 'UNSOLVABLE'

  function r(idx) {
    if (idx === chars.length)
      return check()

    for (let i=9; i>=0; i--) {
      if (used.includes(i)) continue
      if (i === 0 && heads.includes(chars[idx])) continue

      used.push(i)
      const res = r(idx+1)
      if (res) return res
      used.pop()
    }
  }

  function check() {
    const obj = {}

    used.forEach((v, i) => obj[chars[i]] = v)

    let _a = ''
    let _b = ''
    let _c = ''

    for (let v of a) _a += obj[v]
    for (let v of b) _b += obj[v]
    for (let v of c) _c += obj[v]

    return Number(_a) + Number(_b) === Number(_c) ? [_a, _b, _c].join('\n') : null
  }
}
