const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const main = (input) => {
  const [a, b, k] = input.trim().split(' ').map(Number)
  return [Math.max(0, a-k), Math.max(0, b-Math.max(k-a, 0))].join(' ')
}
