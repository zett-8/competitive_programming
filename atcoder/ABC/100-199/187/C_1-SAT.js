const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input.slice(1)

  const his = {}

  for (let i=0; i<n; i++) {
    const s = q[i]
    const k = s[0] === '!' ? s.slice(1) : s
    const exp = s[0] === '!'

    if (~~his[k] === 0) his[k] = exp ? 1 : 2
    else if (~~his[k] === 1 && !exp) return k
    else if (~~his[k] === 2 && exp) return k
  }

  return 'satisfiable'
}
