/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

 Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true

Explanation: Return true because "leetcode" can be segmented as "leet code".
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const wordBreak = (s, wordDict) => {
  const dict = new Set(wordDict)
  const queue = [0]
  const history = new Set()

  while (queue.length) {
    const start = queue.shift()

    if (history.has(start)) continue
    history.add(start)

    for (let end = start + 1; end <= s.length; end++) {
      if (dict.has(s.slice(start, end))) {
        if (end === s.length) return true
        queue.push(end)
      }
    }
  }

  return false
}
