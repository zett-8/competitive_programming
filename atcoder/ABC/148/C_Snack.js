const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }
const lcm = (a, b) => { const gcd = (x, y) => { if (!y) { return x } return gcd(y, x%y) }; return (a*b) / gcd(a, b) }
const main = (input) => {
  const [a, b] = input.trim().split(' ').map(Number)

  return lcm(a, b)
}
