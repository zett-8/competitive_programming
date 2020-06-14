/**
 * Implement atoi which converts a string to an integer.
 * The function first discards as many whitespace characters as necessary until the first non-whitespace character is found.
 * Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible,
 * and interprets them as a numerical value.
 * The string can contain additional characters after those that form the integral number,
 * which are ignored and have no effect on the behavior of this function.
 * If the first sequence of non-whitespace characters in str is not a valid integral number,
 * or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
 * If no valid conversion could be performed, a zero value is returned.
 */

/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = function(str) {
    const arr = Array.from(str.trim())
    let firstChar = null

    arr.some(v => {
        if (v === '+' || v === '-') return false

        firstChar = v
        return true
    })

    if (!firstChar || !firstChar.isNumber) return 0

    const ans = []

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].isNumber && arr[i] !== '+' && arr[i] !== '-') break

        ans.push(arr[i])
    }

    const A = parseInt(ans.join(''), 10) || 0
    return A > 0 ? Math.min(A, 2147483647) : Math.max(A, -2147483648)
}


String.prototype.isNumber = function() {
    return /^[0-9]$/.test(this)
}
