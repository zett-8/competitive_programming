const main = (input) => {
  input = input.trim().split('\n')
  const [, x] = input[0].split(' ')
  const arr = input[1].split(' ')

  return arr.filter(v => v !== x).join(' ')
}.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))
