const main = (input) => {
  input = input.trim().split('\n')
  const [n, w] = input[0].split(' ').map(Number)
  const [, ...q] = input

  const dp = new Array(n)

  for (let i=0; i<n; i++) {
    dp[i] = new Array(w+1).fill(0)
    const [weight, value] = q[i].split(' ').map(Number)

    for (let x=1; x<=w; x++) {
      if (i === 0) dp[0][x] = (weight <= x) ? value : 0
      else if (weight > x) dp[i][x] = dp[i-1][x]
      else dp[i][x] = Math.max(value + (dp[i-1][x-weight] || 0), dp[i-1][x])
    }
  }

  return console.log(dp[n-1][w])
}
