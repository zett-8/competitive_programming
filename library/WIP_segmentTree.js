/**
 * @param {number[]} nums
 */

class NumArray {
  constructor(arr) {
    this.inputArray = arr
    this.n = 1

    while (this.n < this.inputArray.length) this.n *= 2

    this.seg = new Array(this.n*2 - 1).fill(0)
    this.build()

    console.log(this.seg)
  }

  build() {
    for (let i=0; i<this.inputArray.length; i++)
      this.seg[i+this.n-1] = this.inputArray[i]

    for (let i=this.n-2; i>=0; i--)
      this.seg[i] = this.seg[i*2+1] + this.seg[i*2+2]
  }

  update(i, v) {
    const diff = v - this.seg[i+this.n-1]
    // this.seg[i] = v

    for (let x=i+this.n-1; x>=0; x=Math.floor((x-1)/2)) {
      this.seg[x] += diff
      if (x === 0) break
    }

    console.log(this.seg)
  }

  sumRange(l, r) {
    l += this.n-1
    r += this.n-1

    let sum = 0

    while (l <= r) {
      if (l % 2 === 1) {
        sum += this.seg[l]
        l++
      }
      if (r % 2 === 0) {
        sum += this.seg[r]
        r--
      }

      l /= 2
      r /= 2
    }

    return sum
  }
}
