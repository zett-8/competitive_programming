const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const s = input[1].split('')

  if (n%2) return 'No'

  const a = s.slice(0, n/2)
  const b = s.slice(n/2)

  return a.every((v, i) => b[i] === v) ? 'Yes' : 'No'
}
