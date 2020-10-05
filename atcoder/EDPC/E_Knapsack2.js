const _dp = (y, x, v) => { const dp = new Array(y);for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v);return dp; }

const main = (input) => {
  input = input.trim().split('\n')
  const [N, W] = input[0].split(' ').map(Number)
  const [, ...q] = input

  const dp = _dp(N, 10**3+1, Infinity)

  for (let i=0; i<N; i++) {
    const [weight, value] = q[i].split(' ').map(Number)

    for (let v=1; v<=10**3; v++) {
      if (i === 0) dp[i][v] = v <= value ? weight : Infinity
      else if (value > v) dp[i][v] = dp[i-1][v]
      else dp[i][v] = Math.min((dp[i-1][v-value] || Infinity) + weight, dp[i-1][v])
    }
  }

  let ans = 10**3
  while (dp[N-1][ans] > W) ans--

  return console.log(ans)
}
