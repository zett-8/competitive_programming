/**
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// sort(n log n) then return mid (because majority element is more than n/2)
const majorityElement = (nums) => {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length/2)]
}

/**
 * time complexity O(n log n)
 */

// heap
const majorityElement = (nums) => {
  const ans = {}
  for (let n of nums) {
    ans[n] = ~~ans[n] + 1
    if (ans[n] > nums.length/2) return n
  }
}

/**
 * time complexity O(n)
 */
