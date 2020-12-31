const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const a = input[1].split(' ').map(Number)
  const b = input[2].split(' ').map(Number)
  const c = input[3].split(' ').map(Number)

  let ans = 0

  for (let pre=-2, i=0; i<n; i++) {
    ans += b[a[i]-1]
    if (pre+1 === a[i]-1) ans += c[pre]
    pre = a[i]-1
  }

  return ans
}
