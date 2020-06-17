/**
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = function(nums) {
  const addUp = (arr, restArray) => {
    if (!restArray.length) {
      ans.push(arr)
    } else {
      for (let i = 0; i < restArray.length; i++) {
        addUp([...arr, restArray[i]], [...restArray.slice(0, i), ...restArray.slice(i+1)])
      }
    }
  }

  const ans = []
  addUp([], nums)

  return ans
}


/**
 * time complexity O(n!)
 * space complexity O(n!)
 */
