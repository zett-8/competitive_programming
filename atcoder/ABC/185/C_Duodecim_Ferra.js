const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const nCr = (n, r, mod) => { n = BigInt(n); r = BigInt(r); mod = mod && BigInt(mod); let a = 1n, b = 1n; for (let i=0n; i<r; i+=1n) { a *= n-i; b *= r-i } return mod ? Number(a / b % mod) : Number(a / b) }

const main = (input) => {
  const n = Number(input.trim())
  return nCr(n-1, 11)
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : console.log(main(require('fs').readFileSync('dev/stdin', 'utf8'))))
  : console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))
