/**
 Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */

const minimumTotal = (triangle) => {
  for (let x=1; x<triangle.length; x++) {
    const pre = triangle[x-1]
    const cur = triangle[x]

    for (let i=0; i<cur.length; i++) {
      const l_abv = pre[i-1] !== undefined ? pre[i-1] : Infinity
      const abv = pre[i] !== undefined ? pre[i] : Infinity

      cur[i] += Math.min(abv, l_abv)
    }
  }

  return Math.min(...triangle[triangle.length-1])
}
