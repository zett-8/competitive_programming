const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const [, ...q] = input

  const dp = new Array(n)
  dp[0] = q[0].split(' ').map(Number)
  for (let i=1; i<dp.length; i++)
    dp[i] = new Array(3).fill(0)

  for (let i=1; i<dp.length; i++) {
    const [a, b, c] = q[i].split(' ').map(Number)

    dp[i][0] = a + Math.max(dp[i-1][1], dp[i-1][2])
    dp[i][1] = b + Math.max(dp[i-1][0], dp[i-1][2])
    dp[i][2] = c + Math.max(dp[i-1][0], dp[i-1][1])
  }

  return console.log(Math.max(...dp[dp.length-1]))
}
