/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const arr = Array.from(s)

    const stack = []

    while (arr.length) {
        const p = arr.shift()

        if (p.isLeft()) {
            stack.unshift(p)
        } else {
            const left = stack.shift()
            if ((left+p).isPair()) continue
            return false
        }
    }

    return !stack.length
}


String.prototype.isLeft = function() {
    return '[({'.includes(this)
}

String.prototype.isRight = function() {
    return '})]'.includes(this)
}

String.prototype.isPair = function() {
    return '[](){}'.includes(this)
}
