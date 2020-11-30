const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const main = (input) => {
  const s = input.trim()

  let ans = 0

  for (let l=0, r=s.length-1; l<=r; l++, r--)
    if (s[l] !== s[r]) ans++

  return ans
}
