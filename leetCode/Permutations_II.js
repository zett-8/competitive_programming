/**
 Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permuteUnique = (nums) => {
  nums = nums.sort((a, b) => a - b)

  const r = (arr, rest) => {
    if (!rest.length) return ans.push(arr)

    for (let i=0; i<rest.length; i++)
      r([...arr, rest[i]], rest.filter((v, idx) => idx !== i))
  }

  const ans = []
  r([], nums)

  return Array.from(new Set(ans.map(v => v.join('.')))).map(v => v.split('.'))
}
