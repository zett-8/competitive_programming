const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  const [a, b, x] = input.trim().split(' ').map(BigInt)

  let ans = 0

  for (let start=0, end=10**9, i=end/2; true;) {
    const pre = i

    if (BigInt(i)*a + (BigInt(BigInt(String(i).length)) * b) <= x) {
      ans = i
      start = i+1
      i = i + Math.ceil((end-i)/2)
    }
    else {
      end = i-1
      i = start + Math.floor((i-start)/2)
    }

    if (i === pre) break
  }

  return ans
}
