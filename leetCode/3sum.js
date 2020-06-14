/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []

  nums = nums.sort((a,b) => a - b)

  const ans = []

  for (let x = 0; x<nums.length-2; x++) {
    if (x > 0 && nums[x] === nums[x-1]) continue

    let y = x + 1
    let z = nums.length - 1

    while (y < z) {
      const sum = nums[x] + nums[y] + nums[z]

      if (sum > 0) {
        z--
      } else if (sum < 0) {
        y++
      } else {
        ans.push([nums[x], nums[y], nums[z]])
        y++
        z--
        while (nums[y] === nums[y-1]) y++
        while (nums[z] === nums[z+1]) z--
      }
    }

  }
  return ans
}

/**
 *   O(N ^ 2) solution
 */
