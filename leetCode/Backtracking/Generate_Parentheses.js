/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * time complexity O(4^n / √n)
 */

const generateParenthesis = function(n) {
  const ans = []

  const add = (s, left, right) => {
    if (s.length === n * 2) {
      ans.push(s)
      return null
    }

    if (left < n) add(s+'(', left+1, right)
    if (right < left) add(s+')', left, right+1)
  }

  add('', 0, 0)
  return ans
}

/**
 * brute force
 * time complexity O(2^2n x n) 2^2n for all paterns and n for validation
 */

const generateParenthesis = function(n) {
  const ans = []

  const add = (s) => {
    if (s.length === n * 2) {
      if (balanced(s)) ans.push(s)
    } else {
      add(s + '(')
      add(s + ')')
    }
  }

  add('')

  return ans
}

const balanced = (s) => {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++
    } else {
      count--
      if (count < 0) return false
    }
  }

  return count === 0
}
