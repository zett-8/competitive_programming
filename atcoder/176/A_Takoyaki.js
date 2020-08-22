const main = (input) => {
  const [n, x, t] = input.trim().split(' ').map(Number)
  return console.log(Math.ceil(n/x) * t)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
