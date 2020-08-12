/**
 Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
 */

/**
 * @param {string} s
 * @return {string[][]}
 */

const partition = (s) => {
  const isPalindrome = (start, end) => {
    while (start < end) {
      if (s[start] !== s[end]) return false
      start++
      end--
    }
    return true
  }

  const ans = []

  const r = (c, arr) => {
    if (c === s.length) ans.push(arr)

    for (let end=c; end<s.length; end++) {
      if (isPalindrome(c, end)) r(end+1, [...arr, s.slice(c, end+1)])
    }
  }
  r(0, [])

  return ans
}
