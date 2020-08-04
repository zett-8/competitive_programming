/**
 Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3


Constraints:

1 <= n <= 19
 */

/**
 * @param {number} n
 * @return {number}
 */

const memo = (fn) => {
  const cache = {}

  return (...args) => {
    if (cache[args]) return cache[args]
    cache[args] = fn(args)
    return cache[args]
  }
}

const numTrees = memo((n) => {
  if (n <= 1) return 1
  if (n === 2) return 2

  let ans = 0

  for (let i=0; i<n; i++) ans += numTrees(i) * numTrees(n - i - 1)

  return ans
})
