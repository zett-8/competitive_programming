// const lb = (arr, x) => {
//   let i = 0
//   let j = arr.length
//
//   while (i < j) {
//     const m = Math.floor((i + j) / 2)
//
//     if (arr[m] < x) i = m+1
//     else j = m
//   }
//
//   return i
// }
//
// const ub = (arr, x) => {
//   let i = 0
//   let j = arr.length
//
//   while (i < j) {
//     const m = Math.floor((i + j) / 2)
//
//     if (arr[m] <= x) i = m+1
//     else j = m
//   }
//
//   return i
// }

/*

  Structure: Array(sorted)

  Lower bound return the smallest index equal/greater than X

  Upper bound return the smallest index greater than X

 */

// one line https://www.toptal.com/developers/javascript-minifier/
const lb = (t,o)=>{let l=0,n=t.length;for(;l<n;){const r=Math.floor((l+n)/2);t[r]<o?l=r+1:n=r}return l};
const ub = (t,o)=>{let n=0,r=t.length;for(;n<r;){const e=Math.floor((n+r)/2);t[e]<=o?n=e+1:r=e}return n};
