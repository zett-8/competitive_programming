/**
 Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsetsWithDup = (nums) => {
  const ans = new Set()

  const r = (current, arr) => {
    if (!arr.length)
      return current.length ? ans.add(current.sort((a, b) => a - b).join(':')) : null

    const [t, ...rest] = arr
    r(current, rest)
    r([...current, t], rest)
  }
  r([], nums)

  return [[], ...Array.from(ans).map(v => v.split(':'))]
}
