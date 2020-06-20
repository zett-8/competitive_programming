/**
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x, start=0, end=Math.floor(x*0.5)) => {
  const mid = start + Math.floor((end - start) / 2)

  if (mid*mid === x) {
    return mid
  } else if (mid*mid > x) {

    if (Math.pow(mid-1, 2) <= x) return mid-1
    else return mySqrt(x, start, mid-1)

  } else if (mid*mid < x) {

    if (Math.pow(mid+1, 2) === x) return mid+1
    else if (Math.pow(mid+1, 2) >= x) return mid
    else return mySqrt(x, mid+1, end)

  }
}

/**
 * time complexity O(log n)
 */
