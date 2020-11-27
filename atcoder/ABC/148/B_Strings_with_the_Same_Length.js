const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const [a, b] = input[1].split(' ')

  let ans = ''
  for (let i=0; i<n; i++) ans += a[i] + b[i]
  return ans
}
