/**
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sums to target.
 * The same repeated number may be chosen from candidates unlimited number of times.
 */


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = function(candidates, target) {
  const combinations = new Set()

  const addUp = (arr) => {
    const sum = arr.reduce((a,b) => a + b, 0)

    if (sum === target) {
      combinations.add(arr.sort((a,b) => a - b).join(':'))
      return null
    }

    for (let v of candidates) {
      if (sum + v <= target) addUp(arr.concat(v))
    }
  }

  addUp([])

  const ans = []
  for (let v of combinations.values()) {
    ans.push(v.split(':'))
  }

  return ans
}

