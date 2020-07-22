/**
 Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const multiply = (num1, num2) => {
  if (num1 === '0' || num2 === '0') return '0'
  if (num1 === '1' || num2 === '1') return num1 === '1' ? num2 : num1
  num1 = Array.from(num1).reverse().join('')
  num2 = Array.from(num2).reverse().join('')
  const [long, short] = num1.length < num2.length ? [num2, num1] : [num1, num2]

  let a = new Array(short.length + long.length + 1).fill(null).map(v => [])

  for (let s=0; s<short.length; s++) {
    for (let l=0; l<long.length; l++) {
      const re = Array.from(String(parseInt(short[s]) * parseInt(long[l])))
      a[s+l].push(re.pop())
      if (re.length) a[s+l+1].push(re[0])
    }
  }

  let ans = ''
  for (let i=0; a[i]; i++) {
    const r = Array.from(String(a[i].reduce((a, b) => parseInt(a) + parseInt(b), 0)))
    ans += r.pop()
    if (r.length) a[i+1].push(r.pop())
  }

  while (ans[ans.length-1] === '0') ans = ans.slice(0, ans.length-1)
  return Array.from(ans).reverse().join('')
}
