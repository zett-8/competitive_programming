/**
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {
  if (!nums || !nums.length) return []

  const mp = {}
  const arr = new Array(nums.length + 1).fill(null).map(v => [])

  // make map object
  for (let v of nums) mp[v] = ~~mp[v] + 1
  // store in the array according to its count num
  for (let [k, count] of Object.entries(mp)) arr[count].push(k)

  let ans = []
  for (let i=arr.length-1; ans.length < k; i--) {
    while (ans.length < k && arr[i].length) ans.push(arr[i].shift())
  }
  return ans
}

/**
 * time complexity O(n)
 * space complexity O(n)
 */
