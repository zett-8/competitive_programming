const main = (input) => {
  input = input.trim().split('\n')
  const [n, x] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(e => Number(e)-1)

  let i = x-1
  let ans = 0
  const h = {}

  while (true) {
    if (h[i]) break
    h[i] = true
    ans++
    i = q[i]
  }

  return ans
}
