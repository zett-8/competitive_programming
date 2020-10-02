const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(Number)

  const dp = new Array(n).fill(Infinity)
  dp[0] = 0

  for (let i=1; i<n; i++)
    for (let x=1; x<=Math.min(i,k); x++)
      dp[i] = Math.min(dp[i], dp[i-x] + Math.abs(q[i] - q[i-x]))

  return console.log(dp[n-1])
}
