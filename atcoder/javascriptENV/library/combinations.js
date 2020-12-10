const nCr = (n, r, mod) => {
  n = BigInt(n)
  r = BigInt(r)
  mod = mod && BigInt(mod)

  let a = 1n, b = 1n
  for (let i=0n; i<r; i+=1n) {
    a *= n-i
    b *= r-i
  }

  return mod ? Number(a / b % mod) : Number(a / b)
}

const mod_nCr = (n, r, mod) => {
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

// one line
const nCr = (n, r, mod) => { n = BigInt(n); r = BigInt(r); mod = mod && BigInt(mod); let a = 1n, b = 1n; for (let i=0n; i<r; i+=1n) { a *= n-i; b *= r-i } return mod ? Number(a / b % mod) : Number(a / b) }
const mod_nCr = (n, r, mod) => { if (n<0 || r<0) { return 0 } mod = mod || 1e9+7; const a = Math.max(n, r); const b = Math.min(n, r); const p = Math.min(b, a-b); const nu = new Array(p + 1); const de = new Array(p + 1); let dest = 1; if (p > 0) { for (let i = 1; i <= p; i++) { nu[i] = a - p + i; de[i] = i } for (let k = 2; k <= p; k++) { const piv = de[k]; const j = (piv > 1) ? -((a - p) % k) : 0; for (let i = k; i <= p; i += k) { nu[i + j] /= piv; de[i] /= piv }} for (let i = 1; i <= p; i++) { if (nu[i] > 1) dest = dest * nu[i] % mod }} return dest }
