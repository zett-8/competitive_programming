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


// one line
const nCr = (n, r, mod) => { n = BigInt(n); r = BigInt(r); mod = mod && BigInt(mod); let a = 1n, b = 1n; for (let i=0n; i<r; i+=1n) { a *= n-i; b *= r-i } return mod ? Number(a / b % mod) : Number(a / b) }
