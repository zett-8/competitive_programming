/**
 * Given a string, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function(s) {
    const arr = Array.from(s)
    const cur = []

    let _max = 0

    while (arr.length) {
        cur.push(arr.shift())

        while (!noRepeatWord(cur)) {
            cur.shift()
        }

        _max = Math.max(cur.length, _max)
    }

    return _max
}

const noRepeatWord = (arr) => new Set(arr).size === arr.length
