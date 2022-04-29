const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }
const nCr = (n, r, mod) => { n = BigInt(n); r = BigInt(r); mod = mod && BigInt(mod); let a = 1n, b = 1n; for (let i=0n; i<r; i+=1n) { a *= n-i; b *= r-i } return mod ? Number(a / b % mod) : Number(a / b) }

const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(Number).sort((a, b) => a - b)

  if (k === 1) return console.log(0)

  let maxSum = 0
  let minSum = 0

  for (let i=0; i<n; i++) {
    const cmb = nCr(n-i-1, k-1)
    minSum += q[i] * cmb
    maxSum += q[n-1-i] * cmb
  }

  return mlog(maxSum - minSum)
}
