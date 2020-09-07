const main = (input) => {
  const [_a, _b] = input.trim().split(' ')
  const a = BigInt(_a)
  const b = BigInt(_b.split('.').join(''))

  return console.log(`${a*b / 100n}`)
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
