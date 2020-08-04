/**
 Given a string containing only digits, restore it by returning all possible valid IP address combinations.

A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */

const restoreIpAddresses = (s) => {
  s = Array.from(s)

  const r = (current, arr) => {
    if (current.length === 4 && !arr.length) ans.add(current.join('.'))
    else if (current.length === 4 || !arr.length) return null

    const [one, ..._one] = arr
    r([...current, one], _one)

    const two = arr.slice(0, 2)
    const _two = arr.slice(2)
    if (two[0] !== '0') r([...current, two.join('')], _two)

    const three = arr.slice(0, 3)
    const _three = arr.slice(3)
    if (three[0] !== '0' && parseInt(three.join(''), 10) < 256) r([...current, three.join('')], _three)
  }

  const ans = new Set()
  r([], s)

  return Array.from(ans)
}
