// const bs = (arr, x) => {
//   for (let l=0, r=arr.length; l < r;) {
//     const m = Math.floor((l+r)/2)
//
//     if (arr[m] === x) return m
//     else if (arr[m] < x) l = m+1
//     else r = m
//   }
//
//   return -1
// }

// one line https://www.toptal.com/developers/javascript-minifier/
const bs=(t,r)=>{for(let n=0,o=t.length;n<o;){const e=Math.floor((n+o)/2);if(t[e]===r)return e;t[e]<r?n=e+1:o=e}return-1};
