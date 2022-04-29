const main = (input) => {
  input = input.trim().split('\n')

  const [, k] = input[0].split(' ').map(Number)
  const l = input[1].split(' ').map(Number).sort((a, b) => a - b)

  return console.log(l.slice(0, k).reduce((a, b) => a+b, 0))
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
