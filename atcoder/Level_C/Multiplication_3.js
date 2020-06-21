const main = (input) => {
  let [a, b] = input.trim().split(' ')

  a = BigInt(a)
  b = BigInt(Number(b.split('.').join('')))

  return console.log(String((a * b) / 100n).split('n').join(''))
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
