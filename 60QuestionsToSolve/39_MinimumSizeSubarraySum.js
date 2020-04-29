/**
 Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example:

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

const minSubArrayLen = (s, nums) => {
  let min = Infinity

  for (let start = 0, end = 1; end <= nums.length; end++) {
    if (nums.slice(start, end).reduce((a,b) => a+b, 0) >= s) {
      while (nums.slice(start+1, end).reduce((a,b) => a+b, 0) >= s) {
        start++
      }
      min = Math.min(min, end - start)
    }
  }

  return min === Infinity ? 0 : min
}
