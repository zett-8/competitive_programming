const main = (input) => {
  const mod = 998244353n
  const [f, ..._q] = input.trim().split('\n')
  const [n,] = f.split(' ').map(Number)
  const q = _q.map(v => v.split(' ').map(Number))

  const dp = new Array(n+1).fill(0n)
  const dpSum = new Array(n+1).fill(0n)
  dp[1] = 1n
  dpSum[1] = 1n

  for (let i=2; i<=n; i++) {
    let tmp = 0n

    for (let x=0; x<q.length; x++) {
      const [a, b] = q[x]

      // if (i-a <= 0) break

      if (dpSum[i-a] < dpSum[i-(b+1)]) continue
      tmp += (dpSum[i-a] || 0n) - (dpSum[i-(b+1)] || 0n)
    }

    dp[i] = tmp % mod
    dpSum[i] = dpSum[i-1] + dp[i]
  }

  return console.log(`${(dp[n] % mod + mod) % mod}`)
}
