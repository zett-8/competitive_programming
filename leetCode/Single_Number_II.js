/**
 Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,3,2]
Output: 3
Example 2:

Input: [0,1,0,1,0,1,99]
Output: 99
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = (nums) => {
  const ans = {}

  for (let v of nums)
    (~~ans[v]+1 === 3) ? delete ans[v] : ans[v] = ~~ans[v]+1

  return Object.entries(ans)[0][0]
}
