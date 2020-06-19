/**
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
 */


/**
 * @param {number[]} nums
 * @return {number}
 */

const lengthOfLIS = (nums) => {
  const dp = new Array(nums.length).fill(1)

  for (let i=1; i<nums.length; i++) {
    for (let p=0; p<i; p++) {
      if (nums[p] < nums[i]) dp[i] = Math.max(dp[i], dp[p] + 1)
    }
  }

  return Math.max(Math.max(...dp), 0)
}


/**
 * time complexity O(n^2)
 */
