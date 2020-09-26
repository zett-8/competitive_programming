const main = (input) => {
  const [a, b, c, d] = input.trim().split(' ').map(Number)

  if (b < c || a > d) return console.log('No')
  else return console.log('Yes')
}
