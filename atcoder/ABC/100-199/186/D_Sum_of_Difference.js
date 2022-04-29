const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number).sort((a, b) => b - a)

  const partial_sum = Array.from({ length: n })
  for (let sum=0n, i=n-1; i>=0; i--) {
    sum += BigInt(q[i])
    partial_sum[i] = sum
  }

  let ans = 0n

  for (let x=0; x<n-1; x++) {
    const rest = BigInt(n - x - 1)
    ans += (BigInt(q[x]) * rest) - partial_sum[x+1]
  }

  return `${ans}`
}
