const nPr = (n, r, mod) => {
  n = BigInt(n)
  r = BigInt(r)
  mod = mod && BigInt(mod)

  let re = 1n
  for (let i=0n; i<r; i+=1n)
    re = mod ? re * (n-i) % mod : re * (n-i)

  return mod ? Number(re % mod) : Number(re)
}


// one line
const nPr = (n, r, mod) => { n = BigInt(n); r = BigInt(r); mod = mod && BigInt(mod); let re = 1n; for (let i=0n; i<r; i+=1n) { re = mod ? re * (n-i) % mod : re * (n-i) } return mod ? Number(re % mod) : Number(re) }
