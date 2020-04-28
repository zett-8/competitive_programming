/**
 Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const findMin = (nums) => {
  if (nums[0] < nums.slice(-1)) return nums[0]

  const head = nums[0]

  while (nums.length > 1) {
    const mid = Math.floor(nums.length / 2)

    if (head > nums[mid]) {
      if (nums[mid - 1] > nums[mid]) return nums[mid]
      nums = nums.slice(0, mid)
    } else {
      nums = nums.slice(mid+1)
    }
  }

  return nums[0]
}
