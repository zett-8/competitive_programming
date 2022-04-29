const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number)

  let ans = Infinity

  for (let i=1; i<=100; i++) {
    let cost = 0

    for (let x=0; x<n; x++) cost += (i - q[x]) ** 2

    ans = Math.min(ans, cost)
  }

  return console.log(ans)
}
