const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const s = input[1].split('')

  for (let i=0; i<s.length; i++) {
    let c = s[i].charCodeAt(0) + n

    if (c > 90) c -= 26

    s[i] = String.fromCharCode(c)
  }

  return s.join('')
}
