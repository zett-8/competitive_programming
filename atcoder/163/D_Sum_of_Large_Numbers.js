const main = (input) => {
  const mod = 10**9 + 7
  const [n, k] = input.trim().split(' ').map(Number)

  let ans = 0

  for (let i=k; i<=n+1; i++) {
    // (first + last) * n / 2
    const smaller_sum = (i-1) * i / 2
    const bigger_sum = ((n-i+1) + n) * i / 2

    ans += bigger_sum - smaller_sum + 1
  }

  return console.log((ans % mod + mod) % mod)
}
