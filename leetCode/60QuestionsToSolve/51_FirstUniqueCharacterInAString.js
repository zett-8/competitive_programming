/**
 Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
 */

/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = (s) => {
  const ans = {}

  for (let v of Array.from(s)) {
    ans[v] = ans[v] ? ans[v] += 1 : 1
  }

  for (let [i, v] of Array.from(s).entries()) {
    if(ans[v] === 1) return i
  }

  return -1
}
