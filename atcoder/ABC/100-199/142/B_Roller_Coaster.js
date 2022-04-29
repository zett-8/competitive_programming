const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')

  const [n, k] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(Number)

  let ans = 0
  for (let i=0; i<n; i++) if (q[i] >= k) ans++
  return ans
}
