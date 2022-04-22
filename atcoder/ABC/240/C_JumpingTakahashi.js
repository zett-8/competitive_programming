const main = (input) => {
  input = input.trim().split('\n')
  const [n, x] = input[0].split(' ').map(Number)

  const dp = Array.from({ length: n+1 })

  for (let i=0; i<=n; i++)
    dp[i] = Array.from({ length: x+1 }).fill(false)

  dp[0][0] = true

  for (let g=0; g<n; g++) {
    for (let f=0; f<x; f++) {
      if (dp[g][f]) {
        const [a, b] = input[g+1].split(' ').map(Number)
        try { dp[g+1][f+a] = true } catch {}
        try { dp[g+1][f+b] = true } catch {}
      }
    }
  }

  return dp[n][x] ? 'Yes' : 'No'
}
