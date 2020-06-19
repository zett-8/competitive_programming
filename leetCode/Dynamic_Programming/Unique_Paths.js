/**
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
 */


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
  const ans = []
  ans.push(Array(m).fill(1))
  for (let i = 0; i < n - 1; i++) ans.push([1].concat(Array(m-1).fill(null)))

  for (let y = 1; y < n; y++) {
    for (let x = 1; x < m; x++) ans[y][x] = ans[y-1][x] + ans[y][x-1]
  }

  return ans[n-1][m-1]
}

/**
 * time complexity O(mn)
 */
