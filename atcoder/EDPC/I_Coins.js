const _dp = (y, x, v) => { const dp = new Array(y); for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v); return dp }

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const p = input[1].split(' ').map(Number)

  const dp = _dp(n+1, n+1, 0)
  dp[0][0] = 1

  for (let y=1; y<=n; y++) {
    for (let x=0; x<=n; x++) {
      if (x === 0) dp[y][x] = dp[y-1][x] * (1-p[y-1])
      else dp[y][x] = dp[y-1][x-1] * p[y-1] + (dp[y-1][x] * (1-p[y-1]))
    }
  }

  return dp[n].slice(Math.ceil(n/2)).reduce((a, b) => a + b, 0)
}
