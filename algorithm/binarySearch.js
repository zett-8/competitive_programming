Array.prototype.findIndexOf = function(n) {

  let left = 0
  let right = this.length - 1

  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2)

    if (this[mid] === n) return mid

    if (this[mid] <= n) {
      left = mid
    } else {
      right = mid
    }
  }

  if (this[left] === n) return left
  if (this[right] === n) return right
  return undefined
}

const arr = [1, 2, 16, 22, 32, 51, 78, 90, 111]


console.log(arr.findIndexOf(32)) // should be 4
console.log(arr.findIndexOf(4)) // should be undefined
console.log(arr.findIndexOf(111)) // should be 8
console.log(arr.findIndexOf(78)) // should be 6
console.log(arr.findIndexOf(1)) // should be 0
