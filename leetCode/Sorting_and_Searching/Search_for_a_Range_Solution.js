/**
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target, start=0, end=nums.length-1) => {
  if (end-start < 0 || start > end) return [-1, -1]

  const mid = start + Math.floor((end-start+1)/2)

  if (nums[mid] === target) {
    let a_start = mid
    let a_end = mid
    while (nums[a_start-1] === target) a_start--
    while (nums[a_end+1] === target) a_end++
    return [a_start, a_end]
  }

  if (nums[mid] > target) return searchRange(nums, target, start, mid-1)
  if (nums[mid] < target) return searchRange(nums, target, mid+1, end)
}


/**
 * time complexity o(n log n)
 */
