const main = (input) => {
  let [a, b, c] = input.trim().split(' ').map(Number)

  if (c === 0) return '='

  if (a < 0 && c % 2 === 0) a *= -1
  if (b < 0 && c % 2 === 0) b *= -1

  if (a === b) return '='
  return a > b ? '>' : '<'
}
