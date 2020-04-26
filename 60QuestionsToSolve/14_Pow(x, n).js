/**
 * Implement pow(x, n), which calculates x raised to the power n (x**n).
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1
  if (n === 1) return x

  const pow = Math.abs(n)

  const re = pow % 2 ? myPow(x*x, (pow-1)/2) * x : myPow(x*x, pow/2)

  return n < 0 ? x / (x*re) : re
}
