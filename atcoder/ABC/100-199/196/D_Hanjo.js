const _dp = (y, x, v) => { const dp = new Array(y); for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v); return dp }

const r = (grid, x, y, rect) => {
  if (y === grid.length) return 0

  if (rect === 0) return 1

  const [nextX, nextY] = x === grid[0].length-1 ? [0, y+1] : [x+1, y]

  let count = 0

  // pass
  count += r(grid, nextX, nextY, rect)

  // horizontal
  if (grid[y][x] === '.' && grid[y][x+1] === '.') {
    grid[y][x] = grid[y][x+1] = '#'
    count += r(grid, nextX, nextY, rect-1)
    grid[y][x] = grid[y][x+1] = '.'
  }

  // vertical
  if (grid[y][x] === '.' && grid[y+1] && grid[y+1][x] === '.') {
    grid[y][x] = grid[y+1][x] = '#'
    count += r(grid, nextX, nextY, rect-1)
    grid[y][x] = grid[y+1][x] = '.'
  }

  return count
}

const main = (input) => {
  const [H, W, A, _] = input.trim().split(' ').map(Number)
  const grid = _dp(H, W, '.')

  return r(grid, 0, 0, A)
}
