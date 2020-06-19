/**
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function(nums, target, head=nums[0], start=0, end=nums.length-1) {
  if (start > end) return -1

  const mid = start + Math.floor((end-start+1)/2)

  if (nums[mid] === target) return mid

  // need to go smaller
  if (nums[mid] > target) {
    if (nums[mid] >= head && head > target) {
      // right
      return search(nums, target, head, mid+1, end)
    } else {
      // left
      return search(nums, target, head, start, mid-1)
    }

  // need to go bigger
  } else if (nums[mid] < target) {
    if (nums[mid] < head && target >= head) {
      // left
      return search(nums, target, head, start, mid-1)
    } else {
      // right
      return search(nums, target, head, mid+1, end)
    }
  }
}

/**
 * time complexity O(log n)
 */
