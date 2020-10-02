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
  }

  build() {
    for (let i=0; i<this.inputArray.length; i++)
      this.seg[i+this.n-1] = this.inputArray[i]

    for (let i=this.n-2; i>=0; i--)
      this.seg[i] = this.seg[i*2+1] + this.seg[i*2+2]
  }

  update(i, v) {
    const _i = i+this.n-1
    const diff = v - this.seg[_i]

    for (let x=_i; x>=0; x=Math.floor((x-1)/2))
      this.seg[x] += diff
  }

  sumRange(a, b, k=0, l=this.n-1, r=this.seg.length-1) {
    if (r < a+this.n-1 || b+this.n-1 < l) return 0

    if (a+this.n-1 <= l && r <= b+this.n-1) return this.seg[k]

    const leftSum = this.sumRange(a, b, k*2+1, l, Math.floor((l+r)/2))
    const rightSum = this.sumRange(a, b, k*2+2, Math.ceil((l+r)/2), r)

    return leftSum + rightSum
  }
}
