const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }
const lcm = (a, b) => { const gcd = (x, y) => { if (!y) { return x } return gcd(y, x%y) }; return (a*b) / gcd(a, b) }

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number)

  let l = BigInt(q[0])

  for (let i=1; i<n; i++) l = lcm(l, BigInt(q[i]))

  let ans = 0n
  for (let i=0; i<n; i++) ans = (ans + l / BigInt(q[i])) % BigInt(mod)

  return console.log(`${ans}`)
}
