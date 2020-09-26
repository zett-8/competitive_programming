const main = (input) => {
  input = input.trim().split('\n')

  const [n,] = input[0].split(' ').map(Number)
  const arr = input[1].split(' ').map(Number)

  const homework = arr.reduce((a, b) => a + b, 0)

  return console.log(n - homework >= 0 ? n - homework : -1)
}
