/**
 Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */

const generateMatrix = (n) => {
  const ans = new Array(n).fill(null).map(() => new Array(n).fill(0))

  let top = 0
  let right = n-1
  let bottom = n-1
  let left = 0
  let count = 1

  while (top <= bottom && left <= right) {
    // top
    for (let i=left; i<=right; i++) {
      ans[top][i] = count
      count++
    }
    top++

    // right
    for (let i=top; i<=bottom; i++) {
      ans[i][right] = count
      count++
    }
    right--

    // bottom
    for (let i=right; i>=left; i--) {
      ans[bottom][i] = count
      count++
    }
    bottom--

    // left
    for (let i=bottom; i>=top; i--) {
      ans[i][left] = count
      count++
    }
    left++
  }

  return ans
}
