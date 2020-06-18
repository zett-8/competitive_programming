/**
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => mergeSort(nums)[k-1]

const mergeSort = (arr) => {
  const divide = (r) => {
    const mid = Math.floor(r.length / 2)
    return [r.slice(0, mid), r.slice(mid)]
  }

  const merge = (a, b) => {
    const arr = []
    while (a.length && b.length) arr.push(a[0] > b[0] ? a.shift() : b.shift())
    return [...arr, ...a, ...b]
  }

  if (arr.length <= 1) return arr || []

  const [a, b] = divide(arr)
  return merge(mergeSort(a), mergeSort(b))
}

/**
 * time complexity O(n log n)
 */
