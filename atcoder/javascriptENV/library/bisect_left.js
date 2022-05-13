// const bisect_left = (arr, value) => {
//   for (let s=0, e=arr.length-1; true;) {
//     if (s === e) return arr[s] < value ? s+1 : s
//
//     let mid = s + Math.floor((e-s)/2)
//
//     if (arr[mid] === value) {
//       while (arr[mid] === value) mid--
//       return mid+1
//     }
//     else if (arr[mid] > value) {
//       e = mid-1
//       if (s > e) return mid
//     }
//     else if (arr[mid] < value) s = mid+1
//   }
// }

/*

  Search an index to insert X to sorted array

 */

// one line
const bisect_left = (arr, value) => { for (let s=0, e=arr.length-1; true;) { if (s === e) return arr[s] < value ? s+1 : s; let mid = s + Math.floor((e-s)/2); if (arr[mid] === value) { while (arr[mid] === value) { mid-- } return mid+1 } else if (arr[mid] > value) {e = mid-1; if (s > e) { return mid }} else if (arr[mid] < value) { s = mid+1 }}}


module.exports = bisect_left
