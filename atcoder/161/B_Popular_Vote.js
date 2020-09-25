const main = (input) => {
  input = input.trim().split('\n')
  const [, m] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(Number)
  const v = q.reduce((a, b) => a + b, 0)

  let count = 0

  for (let i=0, c = 1 / (4*m); i<q.length; i++)
    if (q[i] >= (v * c)) count++

  return console.log(count >= m ? 'Yes' : 'No')
}
