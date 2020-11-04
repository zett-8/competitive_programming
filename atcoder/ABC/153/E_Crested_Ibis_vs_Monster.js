const _dp = (y, x, v) => { const dp = new Array(y); for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v); return dp }

const main = (input) => {
  input = input.trim().split('\n')
  const [h, n] = input[0].split(' ').map(Number)
  const [, ...q] = input

  const dp = _dp(n, h+1, 0)

  for (let y=0; y<n; y++) {
    const [a, b] = q[y].split(' ').map(Number)
    for (let x=1; x<=h; x++) {
      dp[y][x] = Math.min(
        Math.ceil(x/a)*b,
        (dp[y-1] && dp[y-1][x]) || Infinity,
        (dp[y-1] && dp[y-1][x-a] && dp[y-1][x-a] + b) || Infinity,
        (dp[y][x-a] && dp[y][x-a] + b) || Infinity
        )
    }
  }

  return console.log(dp[n-1][h])
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
