/**
 A conveyor belt has packages that must be shipped from one port to another within D days.
 The i-th package on the conveyor belt has a weight of weights[i].
 Each day, we load the ship with packages on the conveyor belt (in the order given by weights).
 We may not load more weight than the maximum weight capacity of the ship.
 Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.



 Example 1:

 Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
 Output: 15
 Explanation:
 A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
 1st day: 1, 2, 3, 4, 5
 2nd day: 6, 7
 3rd day: 8
 4th day: 9
 5th day: 10

 Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
 */

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */

const shipWithinDays = (weights, D) => {

  for (let capa = 1; capa < Infinity; capa++) {
    const days = [0]

    for (let w of weights) {
      if (w > capa) {
        days.length = D + 1
        break
      }else if (days[days.length - 1] + w <= capa) {
        days[days.length - 1] += w
      } else {
        days.push(w)
      }
    }
    if (days.length = D) return capa
  }
}
