const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  const s = input.trim()

  let odd = true
  let even = true

  for (let i=0; i<s.length; i++) {
    if (i%2 && s[i] === 'R') even = false
    if (!(i%2) && s[i] === 'L') odd = false
  }

  return odd && even ? 'Yes' : 'No'
}
