const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number)

  const ans = Array.from({ length: n }).fill(Infinity)

  for (let i=0; i<n-1; i++) {
    ans[i] = Math.min(q[i], ans[i])
    ans[i+1] = Math.min(q[i], ans[i+1])
  }

  return ans.reduce((a, b) => a+b, 0)
}
