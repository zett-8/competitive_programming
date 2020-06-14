/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows
 * like this: (you may want to display this pattern in a fixed font for better legibility)
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const convert = function(s, numRows) {
    const ans = []
    for (let i = 0; i < numRows; i++) {
        ans.push(new Array())
    }
    const arr = Array.from(s)

    let y = 0

    while (arr.length) {
        // down
        for (y; y < numRows; y++) {
            if (!arr.length) break
            ans[y].push(arr.shift())
        }

        y = Math.max(y-2, 0)

        // up
        for (y; y > 0; y--) {
            if (!arr.length) break
            ans[y].push(arr.shift())
        }
    }

    return ans.map(v => v.join('')).join('')
}
