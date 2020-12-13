const main = (input) => {
  input = input.trim().split('\n')
  const [n, m] = input[0].split(' ').map(Number)
  const q = input[1] ? input[1].split(' ').map(Number).sort((a, b) => a - b) : []
  if (m === 0) return 1

  const gaps = []
  let min_gap = Infinity

  q.unshift(0)
  q.push(n+1)

  for (let i=0; i<q.length-1; i++) {
    const gap = q[i+1] - q[i] - 1
    if (gap > 0) {
      min_gap = Math.min(min_gap, gap)
      gaps.push(gap)
    }
  }

  let ans = 0
  for (let i=0; i<gaps.length; i++) ans += Math.ceil(gaps[i]/min_gap)

  return ans
}
