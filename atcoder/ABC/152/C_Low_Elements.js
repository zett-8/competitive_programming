const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number)

  let ans = 0

  for (let i=0, min=q[0]; i<n; i++) {
    if (q[i] <= min) ans++
    min = Math.min(min, q[i])
  }

  return console.log(ans)
}
