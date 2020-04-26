/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:

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
const generateParenthesis = function(n) {
    const ans = []

    const generate = (arr) => {
        if (arr.length === n*2) {
            if (balanced(arr)) {
                ans.push(arr.join(''))
            }
        } else {
            generate(arr.concat('('))
            generate(arr.concat(')'))
        }
    }

    generate([])

    return ans
}

const balanced = (arr) => {
    let p = 0
    for (let v of arr) {
        if (v === '(') {
            p += 1
        } else {
            p -= 1
            if (p < 0) return false
        }
    }
    return p === 0
}
