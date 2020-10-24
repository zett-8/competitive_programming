const mod = 10**9 + 7
const nCr = (n, r, mod) => { n = BigInt(n); r = BigInt(r); mod = mod && BigInt(mod); let a = 1n, b = 1n; for (let i=0n; i<r; i+=1n) { a *= n-i; b *= r-i } return mod ? Number(a / b % mod) : Number(a / b) }
const modPow = (n, p, mod) => { [n, p, mod] = [n, p, mod].map(BigInt); if (p === 0n) return 1; if (p === 1n) return Number(n); if (p % 2n === 1n) { return Number(BigInt(modPow(n, (p-1n)/2n, mod)) ** 2n * n % mod) } else { return Number(BigInt(modPow(n, p/2n, mod)) ** 2n % mod) }}

const main = (input) => {
  const [n, a, b] = input.trim().split(' ').map(Number)

  return console.log(modPow(2, n, mod) - 1 - nCr(n, a, mod) - nCr(n, b, mod))
}
