/**
 Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = (grid) => {
  let count = 0

  const exploit = (x, y) => {
    grid[y][x] = '0'

    // north
    if (y-1 >= 0 && grid[y-1][x] && grid[y-1][x] === '1') exploit(x, y-1)
    // east
    if (x+1 < grid[0].length && grid[y][x+1] && grid[y][x+1] === '1') exploit(x+1, y)
    //sauth
    if (y+1 < grid.length && grid[y+1][x] && grid[y+1][x] === '1') exploit(x, y+1)
    //west
    if (x-1 >= 0 && grid[y][x-1] && grid[y][x-1] === '1') exploit(x-1, y)
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] !== '1') continue

      count++
      exploit(x, y)
    }
  }

  return count
}
