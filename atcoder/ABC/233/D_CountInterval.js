const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)

  const as = [0]
  for (let o of input[1].split(' ')) as.push(as.slice(-1)[0] + Number(o))

  let ans = 0
  const o = { '0': 1 }

  for (let i=0; i<n; i++) {
    const r = as[i+1] - k
    ans += ~~o[r]
    o[as[i+1]] = ~~o[as[i+1]] + 1
  }

  return ans
}
