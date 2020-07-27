/**
 Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

const minPathSum = (grid) => {
  const w = grid[0].length
  const h = grid.length

  for (let i=1; i<w; i++) grid[0][i] += grid[0][i-1]
  for (let i=1; i<h; i++) grid[i][0] += grid[i-1][0]

  for (let y=1; y<h; y++) {
    for (let x=1; x<w; x++) {
      grid[y][x] += Math.min(grid[y-1][x], grid[y][x-1])
    }
  }

  return grid[h-1][w-1]
}
