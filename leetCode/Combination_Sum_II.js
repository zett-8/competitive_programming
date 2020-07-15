/**
 Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum2 = (candidates, target) => {
  candidates = candidates.sort((a, b) => a - b)

  const r = (arr, s, rest) => {
    if (s === target) ans.push(arr)
    if (s === target || s > target || !rest.length) return null

    const [a, ...b] = rest

    r([...arr, a], s+a, b)
    r(arr, s, b)
  }

  const ans = []
  r([], 0, candidates)

  return Array.from(new Set(ans.map(v => v.join('.')))).map(v => v.split('.'))
}
