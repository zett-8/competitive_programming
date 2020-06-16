/**
 *
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

 */


/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
  let start = 0
  let end = 1

  for (let i = 0; i < s.length-1; i++) {
    // case1: there is a center char
    const len1 = expandAndFindLongestSubS(s, i, i)
    // case2: no center char
    const len2 = expandAndFindLongestSubS(s, i, i+1)
    const len = Math.max(len1, len2)

    if (len > end - start) {
      start = i - Math.ceil(len / 2) + 1
      end = i + Math.floor(len / 2) + 1
    }
  }

  return s.slice(Math.max(0, start), end)
}

const expandAndFindLongestSubS = (s, start, end) => {
  if (!s || start > end) return 0

  while (start >=0 && end < s.length && s[start] === s[end]) {
    start--
    end++
  }

  return end - start - 1
}


/**
 *  time complexity O(N^2)
 *  space complexity O(1)
 */
