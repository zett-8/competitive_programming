const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const s = input[1]

  let ans = 1

  for (let i=1; i<n; i++)
    if (s[i] !== s[i-1]) ans++

  return ans
}
