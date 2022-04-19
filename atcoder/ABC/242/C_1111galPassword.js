const main = (input) => {
  const m = 998244353n

  const dp = [[1n, 1n], [1n, 1n], [1n, 1n], [1n, 1n], [1n, 1n], [1n, 1n], [1n, 1n], [1n, 1n], [1n, 1n]]

  for (let x=1; x<parseInt(input.trim(), 10); x++) {
    for (let i=0; i<9; i++)
      dp[i][0] = dp[i][1]

    for (let y=0; y<9; y++)
      dp[y][1] = ((dp[y-1]?.[0] || 0n) + (dp[y+1]?.[0] || 0n) + (dp[y][0])) % m
  }

  return `${dp.reduce((a, b) => (a + b[1]) % m, 0n)}`
}
