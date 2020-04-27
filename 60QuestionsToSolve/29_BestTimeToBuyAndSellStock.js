/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction
 * (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * Note that you cannot sell a stock before you buy one.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let min = prices[0]
  let max = -Infinity

  for (let v of prices) {
    max = Math.max(v - min, max)
    min = Math.min(v, min)
  }

  return max === -Infinity ? 0 : max
}
