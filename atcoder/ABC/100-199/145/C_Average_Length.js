const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const q = input.slice(1).map(v => v.split(' ').map(Number))

  const p = []
  let ans = 0
  let count = 0

  const makePattern = (arr, rest) => {
    if (!rest.length) p.push(arr)
    for (let i=0; i<rest.length; i++) {
      makePattern([...arr, rest[i]], [...rest.slice(0, i), ...rest.slice(i+1)])
    }
  }
  makePattern([], q)

  for (let i=0; i<p.length; i++) {
    let sum = 0

    for (let ii=0; ii<p[i].length-1; ii++) {
      const [x1, y1] = p[i][ii]
      const [x2, y2] = p[i][ii+1]

      sum += Math.sqrt((x1-x2)**2 + (y1-y2)**2)
    }

    ans += sum
    count++
  }

  return ans / count
}
