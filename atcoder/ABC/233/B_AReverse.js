const main = (input) => {
  input = input.trim().split('\n')
  const [l, r] = input[0].split(' ').map(Number)
  const s = input[1]

  return s.slice(0, l-1) + s.slice(l-1, r).split('').reverse().join('') + s.slice(r)
}
