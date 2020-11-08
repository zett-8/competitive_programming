const _dp = (y, x, v) => { const dp = new Array(y); for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v); return dp }

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number)

  let line_max = _dp(1, n, -Infinity)

  for (let sum=0, i=0; i<n; i++) {
    sum += q[i]
    line_max[i] = Math.max(sum, (line_max[i-1] && line_max[i-1]) || -Infinity)
  }

  let ans = 0

  let preSum = 0
  let lineSum = 0
  for (let i=0; i<n; i++) {
    const currentSum = preSum + lineSum + q[i]

    ans = Math.max(ans, currentSum)
    ans = Math.max(ans, preSum+line_max[i])

    preSum = currentSum
    lineSum += q[i]
  }

  return console.log(ans)
}
