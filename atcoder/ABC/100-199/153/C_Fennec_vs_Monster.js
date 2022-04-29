const main = (input) => {
  input = input.trim().split('\n')
  const [, k] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(Number).sort((a, b) => a - b)

  for (let i=0; i<k; i++) q.pop()

  return console.log(q.reduce((a, b) => a + b, 0))
}
