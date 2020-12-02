// const itbs = (n, length) => {
//   let re = n.toString(2)
//   length = Math.max(re.length, length)
//   return '0'.repeat(length - re.length) + re
// }

// one line
const itbs = (n, length) => { let re = n.toString(2); length = Math.max(re.length, length); return '0'.repeat(length - re.length) + re }
module.exports = itbs
