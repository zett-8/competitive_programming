const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const nCr_mod = (n, r, mod) => {
  if (n<0 || r<0) return 0
  mod = mod || 1e9+7
  const a = Math.max(n, r)
  const b = Math.min(n, r)
  const p = Math.min(b, a-b)
  const nu = new Array(p + 1)
  const de = new Array(p + 1)
  let dest = 1
  if (p > 0) {
    for (let i = 1; i <= p; i++) {
      nu[i] = a - p + i
      de[i] = i
    }
    for (let k = 2; k <= p; k++) {
      const piv = de[k]
      const j = (piv > 1) ? -((a - p) % k) : 0
      for (let i = k; i <= p; i += k) {
        nu[i + j] /= piv; de[i] /= piv
      }
    }
    for (let i = 1; i <= p; i++) {
      if (nu[i] > 1) dest = dest * nu[i] % mod
    }
  }
  return dest
}


const main = (input) => {
  const [x, y] = input.trim().split(' ').map(Number)

  if ((x+y) % 3) return 0

  const m = (2*x-y)/3
  const n = (2*y-x)/3

  return nCr_mod(n+m, Math.min(n, m))
}
