const main = (input) => {
  input = input.trim().split('\n')
  const [H, W] = input[0].split(' ').map(Number)

  const grid = Array.from({ length: H })
  const dp = Array.from({ length: H })
  for (let i=0; i<H; i++) {
    grid[i] = input[i+1].split('')
    dp[i] = Array.from({ length: W }).fill(0)
  }

  dp[0][0] = 1

  let ans = 1
  for (let y=0; y<H; y++) {
    for (let x=0; x<W; x++) {
      if (y === 0 && x === 0) continue
      if (grid[y][x] === '#') continue

      let u = 0
      let l = 0
      try { u = (dp[y-1][x] || -1) + 1 } catch {}
      try { l = (dp[y][x-1] || -1) + 1 } catch {}

      dp[y][x] = Math.max(u, l)

      ans = Math.max(ans, dp[y][x])
    }
  }

  return ans
}
