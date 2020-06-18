/**
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = (nums) => {
  let start = 0
  let end = nums.length - 1
  let i = 0

  while (i <= end && start < end) {
    if (nums[i] === 0) {
      [nums[i], nums[start]] = [nums[start], 0]
      start++
      i++
    } else if (nums[i] === 2) {
      [nums[i], nums[end]] = [nums[end], 2]
      end--
    } else {
      i++
    }
  }
}

/**
 * time complexity O(n)
 * space complexity O(n)
 */
