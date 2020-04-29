/**
 Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const lengthOfLIS = (nums) => {
  if (!nums.length) return 0

  const dp = [1]

  for (let i = 1; i < nums.length; i++) {
    let max = 1
    for (let d = 0; d < i; d++) {
      max = nums[d] < nums[i] ? Math.max(max, dp[d]+1) : max
    }
    dp[i] = max
  }

  return Math.max(...dp)
}
