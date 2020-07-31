/**
 A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 */

/**
 * @param {string} s
 * @return {number}
 */

const numDecodings = (str) => {
  const cache = []

  const r = (idx) => {
    if (idx === str.length) return 1
    if (str[idx] === '0') return null

    if (cache[idx]) return cache[idx]

    let result = 0
    result += r(idx+1)
    result += str[idx+1] && parseInt(str[idx]+str[idx+1], 10) < 27 ? r(idx+2) : 0

    cache[idx] = result
    return result
  }

  return r(0)
}
