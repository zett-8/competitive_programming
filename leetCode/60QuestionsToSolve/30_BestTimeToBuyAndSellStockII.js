/**
 * Say you have an array prices for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like
 * (i.e., buy one and sell one share of the stock multiple times).
 *
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let benefit = 0

  // whatever it is, every ascending values are possible benefit
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i+1] - prices[i] > 0) benefit += prices[i+1] - prices[i]
  }

  return benefit
}
