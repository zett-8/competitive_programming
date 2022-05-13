// const heaps = () => {
//   class Heaps {
//     constructor() {
//       this.n = [null]
//       this.sum = 0
//     }
//
//     add(v) {
//       this.n.push(v)
//       this.sum += v
//
//       let index = this.n.length - 1
//       const current = this.n[index]
//
//       while (index > 1) {
//         const parentIndex = Math.floor(index/2)
//         const parent = this.n[parentIndex]
//
//         if (parent < current) {
//           this.n[parentIndex] = current
//           this.n[index] = parent
//
//           index = parentIndex
//         }
//         else break
//       }
//     }
//
//     remove() {
//       if (!this.n[1]) return null
//
//       let re = this.n[1]
//       const end = this.n.pop()
//       if (this.n.length > 1) this.n[1] = end
//
//       let index = 1
//       let current = this.n[1]
//       let length = this.n.length
//
//       while (true) {
//         const leftChildIndex = index*2
//         const rightChildIndex = index*2+1
//         let leftChild, rightChild
//         let swap = null
//
//         if (leftChildIndex < length) {
//           leftChild = this.n[leftChildIndex]
//           if (leftChild > current) swap = leftChildIndex
//         }
//         if (rightChildIndex < length) {
//           rightChild = this.n[rightChildIndex]
//           if (
//             swap === null && rightChild > current ||
//             swap !== null && rightChild > leftChild
//           ) swap = rightChildIndex
//         }
//
//         if (swap === null) break
//         this.n[index] = this.n[swap]
//         this.n[swap] = current
//         index = swap
//       }
//
//       this.sum -= re
//       return re
//     }
//   }
//
//   return new Heaps()
// }


/*

  Tree structure

  Parent is always greater than its child

  Always return biggest num when to remove()

 */


// one line code   https://javascript-minifier.com/
const heaps = ()=>{return new class{constructor(){this.n=[null],this.sum=0}add(t){this.n.push(t),this.sum+=t;let n=this.n.length-1;const s=this.n[n];for(;n>1;){const t=Math.floor(n/2),h=this.n[t];if(!(h<s))break;this.n[t]=s,this.n[n]=h,n=t}}remove(){if(!this.n[1])return null;let t=this.n[1];const n=this.n.pop();this.n.length>1&&(this.n[1]=n);let s=1,h=this.n[1],i=this.n.length;for(;;){const t=2*s,n=2*s+1;let l,e,r=null;if(t<i&&(l=this.n[t])>h&&(r=t),n<i&&(e=this.n[n],(null===r&&e>h||null!==r&&e>l)&&(r=n)),null===r)break;this.n[s]=this.n[r],this.n[r]=h,s=r}return this.sum-=t,t}}};

module.exports = heaps
