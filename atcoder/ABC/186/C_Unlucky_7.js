const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  const n = Number(input.trim())

  let ans = 0

  for (let i=1; i<=n; i++) {
    const s = i.toString(10) + i.toString(8)

    let noSeven = true
    for (let x=0; x<s.length; x++)
      if (s[x] === '7') noSeven = false

    if (noSeven) ans++
  }

  return ans
}
