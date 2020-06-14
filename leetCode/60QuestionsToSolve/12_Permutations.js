/**
 * Given a collection of distinct integers, return all possible permutations.

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
        addUp(arr.concat(restArray[i]), restArray.filter((v, ri) => ri !== i))
      }
    }
  }

  const ans = []
  addUp([], nums)

  return ans
}
