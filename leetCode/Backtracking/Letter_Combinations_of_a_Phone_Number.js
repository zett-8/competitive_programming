/**
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */

const data = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
}

const letterCombinations = (digits) => {
  if (!digits) return []

  const ans = []

  digits = Array.from(digits)
  for (let i=0; i<digits.length; i++) {
    digits[i] = data[digits[i]]
  }

  const recur = (s, d) => {
    if (!d.length) {
      ans.push(s)
      return null
    }
    const letter = d[0]
    const rest = d.slice(1)
    for (let char of letter) {
      recur(s+char, rest)
    }
  }
  recur('', digits)

  return ans
}

/**
 * time complexity O(3^n x 4^m)
 * space complexity O(3^n x 4^m)
 */
