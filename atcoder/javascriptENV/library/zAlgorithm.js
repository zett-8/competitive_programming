// const zAlgorithm = (s) => {
//   const re = [0]
//   let max = 0
//
//   for (let i=1; i<s.length; i++) {
//     if (s[i] !== s[0]) {
//       re[i] = 0
//       continue
//     }
//
//     let a=0, b=i, count=1
//     while (true) {
//       a++
//       b++
//
//       if (s[a] !== s[b] || a === i || b >= s.length) break
//       count++
//     }
//
//     re[i] = count
//     if (count > max) max = count
//   }
//
//   return { max, array: re }
// }

// one line code   https://javascript-minifier.com/
const zAlgorithm=t=>{const e=[0];let n=0;for(let r=1;r<t.length;r++){if(t[r]!==t[0]){e[r]=0;continue}let l=0,o=r,a=1;for(;o++,!(t[++l]!==t[o]||l===r||o>=t.length);)a++;e[r]=a,a>n&&(n=a)}return{max:n,array:e}};

module.exports = zAlgorithm
