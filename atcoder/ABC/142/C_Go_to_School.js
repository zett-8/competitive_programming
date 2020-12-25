const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const o = {}
  input[1].split(' ').map((v, i) => o[v] = i+1)
  return Object.keys(o).sort((a, b) => a - b).map(v => o[v]).join(' ')
}
