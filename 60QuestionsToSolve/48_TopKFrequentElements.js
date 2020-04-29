/**
 Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {
  const ans = {}

  for (let v of nums) ans[v] = ans[v] ? ans[v] += 1 : 1

  return Object.keys(ans).map(v => [v, ans[v]]).sort((a,b) => b[1] - a[1]).slice(0, k).map(v => v[0])
}
