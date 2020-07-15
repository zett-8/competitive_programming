/**
 Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix) => {
  if (!matrix.length) return []

  let top = left = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1

  const ans = []

  while (top <= bottom && left <= right) {
    // top
    for (let i=left; i<=right; i++)
      ans.push(matrix[top][i])
    top++
    if (top > bottom) break

    // right
    for (let i=top; i<=bottom; i++)
      ans.push(matrix[i][right])
    right--
    if (left > right) break

    // bottom
    for (let i=right; i>=left; i--)
      ans.push(matrix[bottom][i])
    bottom--
    if (bottom > top) break

    // left
    for (let i=bottom; i>=top; i--)
      ans.push(matrix[i][left])
    left++
  }

  return ans
}
