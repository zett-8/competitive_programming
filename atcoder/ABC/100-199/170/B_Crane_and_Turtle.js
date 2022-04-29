const main = (input) => {
  const [x, y] = input.trim().split(' ').map(Number)

  for (let t=0; t<=x; t++) {
    const c = x-t
    if (t + c === x && t*4 + c*2 === y) return console.log('Yes')
  }

  return console.log('No')
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
