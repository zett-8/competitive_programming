/**
 Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersection = (nums1, nums2) => {
  const [short, long] = nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2]

  const ans = []
  for (let v of short) {
    if (long.includes(v)) ans.push(v)
  }

  return Array.from(new Set(ans))
}
