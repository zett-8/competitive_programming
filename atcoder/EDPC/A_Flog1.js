const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number)

  const dp = new Array(n).fill(0)
  dp[1] = Math.abs(q[0] - q[1])

  for (let i=2; i<n; i++)
    dp[i] = Math.min(dp[i-1] + Math.abs(q[i] - q[i-1]), dp[i-2] + Math.abs(q[i] - q[i-2]))

  return console.log(dp[n-1])
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
