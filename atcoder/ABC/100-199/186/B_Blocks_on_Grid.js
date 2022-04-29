const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const [h, w] = input[0].split(' ').map(Number)
  const grid = input.slice(1)

  for (let i=0; i<h; i++) grid[i] = grid[i].split(' ').map(Number)

  let min = Infinity
  for (let H=0; H<h; H++)
    for (let W=0; W<w; W++)
      min = Math.min(min, grid[H][W])

  let ans = 0
  for (let H=0; H<h; H++)
    for (let W=0; W<w; W++)
      if (min < grid[H][W]) ans += grid[H][W] - min

  return ans
}
