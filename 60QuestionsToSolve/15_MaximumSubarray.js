/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
  let previous = 0
  let max = -Infinity

  while (nums.length) {
    const n = nums.shift()
    previous = Math.max(previous + n, n)
    max = Math.max(previous, max)
  }

  return max
}
