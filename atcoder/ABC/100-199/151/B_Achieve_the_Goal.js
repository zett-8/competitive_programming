const main = (input) => {
  input = input.trim().split('\n')
  const [n, k, m] = input[0].split(' ').map(Number)
  const sum = input[1].split(' ').map(Number).reduce((a, b) => a + b, 0)

  for (let i=0; i<=k; i++)
    if ((sum+i) / n >= m) return console.log(i)

  return console.log(-1)
}
