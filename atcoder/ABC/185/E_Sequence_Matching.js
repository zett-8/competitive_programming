const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const _dp = (y, x, v) => { const dp = new Array(y); for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v); return dp }

const main = (input) => {
  input = input.trim().split('\n')
  const [n, m] = input[0].split(' ').map(Number)
  const str_a = input[1].split(' ')
  const str_b = input[2].split(' ')

  const dp = _dp(m+1, n+1, 0)
  for (let i=0; i<=n; i++) dp[0][i] = i
  for (let i=0; i<=m; i++) dp[i][0] = i

  for (let h=1; h<=m; h++) {
    for (let w=1; w<=n; w++) {
      const a = dp[h-1][w] + 1
      const b = dp[h][w-1] + 1
      const c = dp[h-1][w-1] + (str_b[h-1] === str_a[w-1] ? 0 : 1)

      dp[h][w] = Math.min(a, b, c)
    }
  }

  return dp[m][n]
}
