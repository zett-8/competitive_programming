const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input.slice(1)

  let ans = 0

  for (let a=0; a<n-1; a++) {
    for (let b=a+1; b<n; b++) {
      const [x1, y1] = q[a].split(' ').map(Number)
      const [x2, y2] = q[b].split(' ').map(Number)

      if (Math.abs((y2-y1)/(x2-x1)) <= 1) ans++
    }
  }

  return ans
}
