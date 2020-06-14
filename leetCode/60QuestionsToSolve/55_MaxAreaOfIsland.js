/**
 Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

const maxAreaOfIsland = (grid) => {
  let max = 0

  const exploit = (y, x) => {
    let count = 0
    if (grid[y][x] === 1) {
      count++
      grid[y][x] = 0
    }

    // north
    if (y-1 >= 0 && grid[y-1][x] === 1) {
      count += exploit(y-1, x)
    }
    // east
    if (x+1 < grid[0].length && grid[y][x+1] === 1) {
      count += exploit(y, x+1)
    }
    // south
    if (y+1 < grid.length && grid[y+1][x] === 1) {
      count += exploit(y+1, x)
    }
    // west
    if (x-1 >= 0 && grid[y][x-1] === 1) {
      count += exploit(y, x-1)
    }

    return count
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === 1) max = Math.max(max, exploit(y, x))
    }
  }

  return max
}
