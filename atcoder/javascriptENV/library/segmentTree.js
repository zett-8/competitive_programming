// class SegTree {
//   constructor(arr) {
//     this.inputArray = arr
//     this.n = 1
//
//     while (this.n < this.inputArray.length) this.n *= 2
//
//     this.seg = new Array(this.n*2 - 1).fill(0)
//     this.build()
//   }
//
//   build() {
//     for (let i=0; i<this.inputArray.length; i++)
//       this.seg[i+this.n-1] = this.inputArray[i]
//
//     for (let i=this.n-2; i>=0; i--)
//       this.seg[i] = this.seg[i*2+1] + this.seg[i*2+2]
//   }
//
//   update(i, v) {
//     const _i = i+this.n-1
//     const diff = v - this.seg[_i]
//
//     for (let x=_i; x>=0; x=Math.floor((x-1)/2))
//       this.seg[x] += diff
//   }
//
//   sumRange(a, b, k=0, l=this.n-1, r=this.seg.length-1) {
//     if (r < a+this.n-1 || b+this.n-1 < l) return 0
//
//     if (a+this.n-1 <= l && r <= b+this.n-1) return this.seg[k]
//
//     const leftSum = this.sumRange(a, b, k*2+1, l, Math.floor((l+r)/2))
//     const rightSum = this.sumRange(a, b, k*2+2, Math.ceil((l+r)/2), r)
//
//     return leftSum + rightSum
//   }
// }

/*

  Sum up elements between certain range

  index [i] represents [i*2] and [i*2+1]

 */

// one line
class SegTree{constructor(t){for(this.inputArray=t,this.n=1;this.n<this.inputArray.length;)this.n*=2;this.seg=new Array(2*this.n-1).fill(0),this.build()}build(){for(let t=0;t<this.inputArray.length;t++)this.seg[t+this.n-1]=this.inputArray[t];for(let t=this.n-2;t>=0;t--)this.seg[t]=this.seg[2*t+1]+this.seg[2*t+2]}update(t,s){const i=t+this.n-1,h=s-this.seg[i];for(let t=i;t>=0;t=Math.floor((t-1)/2))this.seg[t]+=h}sumRange(t,s,i=0,h=this.n-1,n=this.seg.length-1){if(n<t+this.n-1||s+this.n-1<h)return 0;if(t+this.n-1<=h&&n<=s+this.n-1)return this.seg[i];return this.sumRange(t,s,2*i+1,h,Math.floor((h+n)/2))+this.sumRange(t,s,2*i+2,Math.ceil((h+n)/2),n)}}
