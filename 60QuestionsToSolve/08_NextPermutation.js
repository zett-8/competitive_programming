/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 *
 * The replacement must be in-place and use only constant extra memory
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
    if (nums.length < 2) return null

    // find first descending number from the end of the array
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            // find minimum and greater than nums[i] from the right side
            const min = {
                val: 10000,
                idx: null
            }
            for (let x = i + 1; x < nums.length; x++) {
                if (nums[i] < nums[x] && nums[x] < min.val) {
                    min.val = nums[x]
                    min.idx = x
                }
            }
            // only if ther is proper number, swap them
            if (min.idx) {
                [nums[i], nums[min.idx]] = [nums[min.idx], nums[i]]
                // sort right side by ascending order
                const rest = nums.splice(i+1)
                rest.sort((a,b) => a - b)
                nums.push(...rest)
                return null
            }
        }
    }

    // if there is no next greater permutation then just sort as decreasing
    nums.sort((a, b) => a - b)
}
