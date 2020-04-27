/**
 * Given a set of distinct integers, nums, return all possible subsets (the power set).
 * Note: The solution set must not contain duplicate subsets.
 *
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsets = (nums) => {
  const add = (arr, idx) => {
    ans.push(arr)

    for (let i = idx; i < nums.length; i++) {
      add([...arr, nums[i]], i+1)
    }
  }

  const ans = []
  add([], 0)

  return ans
}
