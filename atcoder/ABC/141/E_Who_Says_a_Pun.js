const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const zAlgorithm=t=>{const e=[0];let n=0;for(let r=1;r<t.length;r++){if(t[r]!==t[0]){e[r]=0;continue}let l=0,o=r,a=1;for(;o++,!(t[++l]!==t[o]||l===r||o>=t.length);)a++;e[r]=a,a>n&&(n=a)}return{max:n,array:e}};

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const s = input[1]

  let ans = 0

  for (let i=0; i<n; i++) {
    const re = zAlgorithm(s.slice(i)).max
    if (re > ans) ans = re
  }

  return ans
}
