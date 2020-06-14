/**
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    for (let x = 0; x < nums.length - 1; x ++) {
        for (let y = x + 1; y < nums.length; y++) {
            if (nums[x] + nums[y] === target) return [x, y]
        }
    }
}
