/**
 * Given an array of strings, group anagrams together.

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
 
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const ans = {}

    for (let v of strs) {
      const s = Array.from(v).sort().join('')

      ans[s] = ans[s] ? ans[s].concat(v) : [v]
    }

  return Object.keys(ans).map(v => ans[v])
}
