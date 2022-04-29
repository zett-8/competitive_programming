const main = (input) => {
  input = input.trim().split('\n')
  let [h, n] = input[0].split(' ').map(Number)
  const q = input[1].split(' ')

  for (let i=0; i<n; i++) {
    h -= Number(q[i])
    if (h <= 0) return console.log('Yes')
  }

  return console.log('No')
}
