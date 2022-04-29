const main = (input) => {
  const [a, b] = input.trim().split(' ').map(Number)

  return console.log(a > b ? String(b).repeat(a) : String(a).repeat(b))
}
