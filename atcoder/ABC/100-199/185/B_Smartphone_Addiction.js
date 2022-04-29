const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const [n, m, t] = input[0].split(' ').map(Number)
  const q = input.slice(1)

  let battery = n
  let current = 0
  for (let i=0; i<m; i++) {
    const [s, e] = q[i].split(' ').map(Number)
    battery -= s-current
    if (battery <= 0) return 'No'

    battery = Math.min(battery + (e-s), n)
    current = e
  }

  battery -= (t-current)

  return battery > 0 ? 'Yes' : 'No'
}
