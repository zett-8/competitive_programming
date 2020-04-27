/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 *
 *

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

const uniquePathsWithObstacles = (obstacleGrid) => {
  const OG = obstacleGrid
  // when start is obstable
  if (OG[0][0]===1) return 0

  // there is only one line
  if (OG.length === 1) {
    return OG[0].reduce((a, b) => a + b, 0) ? 0 : 1
  }

  // there is only one line
  if (OG[0].length === 1) {
    for (let v of OG) {
      if (v[0] === 1) return 0
    }
    return 1
  }

  // put null instead of 1
  for (let [x, arr] of OG.entries()) {
    for (let [y, _] of arr.entries()) {
      if (OG[x][y] === 1) OG[x][y] =  null
    }
  }

  // put 1 on top row until there is obstacle
  for (let i = 0; i < OG[0].length; i++) {
    if (OG[0][i] !== null) {
      OG[0][i] = 1
    } else { break }
  }
  // put 1 on left column until there is obstacle
  for (let i = 0; i < OG.length; i++) {
    if (OG[i][0] !== null) {
      OG[i][0] = 1
    } else { break }
  }

  for (let y = 1; y < OG.length; y++) {
    for (let x = 1; x < OG[0].length; x++) {
      if (OG[y][x] !== null) {
        OG[y][x] = (OG[y-1][x] || 0) + (OG[y][x-1] || 0)
      }
    }
  }

  return OG.slice(-1)[0].slice(-1)
}
