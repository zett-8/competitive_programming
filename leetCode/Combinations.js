/**
 Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const combine = (n, k) => {
  const ans = new Set()

  const r = (arr, num) => {
    if (arr.length === k){
      ans.add(arr.sort((a, b) => a - b).join(':'))
      return null
    }

    if (num > n) return null

    r(arr, num+1)
    r([...arr, num], num+1)
  }
  r([], 1)

  return Array.from(ans).map(v => v.split(':'))
}
