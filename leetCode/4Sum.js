/**
 Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

const fourSum = (nums, target) => {
  nums = nums.sort((a, b) => a - b)
  const ans = []

  for (let a=0; a<nums.length-3; a++) {
    for (let b=a+1; b<nums.length-2; b++) {
      let c = b+1
      let d = nums.length - 1

      while (c < d) {
        if (nums[a]+nums[b]+nums[c]+nums[d] === target)
          ans.push([nums[a], nums[b], nums[c], nums[d]])

        if (nums[a]+nums[b]+nums[c]+nums[d] > target) {
          d--
          while (nums[d] === nums[d+1]) d--
        } else {
          c++
          while (nums[c] === nums[c-1]) c++
        }
      }

      while (nums[b] === nums[b+1]) b++
    }
    while (nums[a] === nums[a+1]) a++
  }

  return ans
}
