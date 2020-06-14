/**
 You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
because they are adjacent houses.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const rob = (nums) => {
  if (!nums.length) return 0
  if (nums.length <= 2) return Math.max(...nums)

  const arrays = [nums.slice(1), nums.slice(0, -1)]

  for (let arr of arrays) {
    for (let [i, v] of arr.entries()) {
      if (i < 2) {
        continue
      }else if (i === 2) {
        arr[i] = arr[0] + v
      } else {
        arr[i] = Math.max(arr[i-2] + v, arr[i-3] + v)
      }
    }
  }

  return Math.max(...arrays[0],...arrays[1])
}
