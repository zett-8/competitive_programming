const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number)

  let ans = 0

  for (let x=0; x<n-1; x++)
    for (let y=x+1; y<n; y++)
      ans += q[x] * q[y]

  return ans
}
