const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number)

  let max = 0
  let ans = null

  for (let i=2; i<=1000; i++) {
    let count = 0
    for (let x=0; x<n; x++)
      if (q[x] % i === 0) count++

    if (count >= max) {
      max = count
      ans = i
    }
  }

  return console.log(ans)
}
