/**
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
  let is_col = false
  let is_row = false

  // put zero at head of column and row if there is zero in the line
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === 0) {
        matrix[0][x] = 0
        matrix[y][0] = 0

        if (y === 0) is_row = true
        if (x === 0) is_col = true
      }
    }
  }

  // put zero on column if the head is 0
  for (let i=1; i<matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      for (let y=1; y<matrix.length; y++) {
        matrix[y][i] = 0
      }
    }
  }

  // put zero on row if the head is 0
  for (let i=0; i<matrix.length; i++) {
    if (matrix[i][0] === 0 && i === 0) {
        matrix[i] = is_row ? new Array(matrix[0].length).fill(0) : matrix[i]
    } else if (matrix[i][0] === 0) {
        matrix[i] = new Array(matrix[0].length).fill(0)
    }

    if (matrix[0][0] === 0 && is_col) matrix[i][0] = 0
  }
}
