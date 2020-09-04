const main = (input) => {
  input = input.trim().split('\n')

  const [x,] = input[0].split(' ').map(Number)
  const arr = input[1] ? input[1].split(' ').map(Number).sort((a, b) => a - b) : []

  for (let abs = 0; 'infinite'; abs++) {
    if (!arr.includes(x - abs)) return console.log(x - abs)
    if (!arr.includes(x + abs)) return console.log(x + abs)
  }
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
