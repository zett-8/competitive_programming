const main = (input) => {
  const [A, B, C, K] = input.trim().split(' ').map(v => parseInt(v))
  if (A >= K) return console.log(K)
  if (A + B >= K) return console.log(A)
  return console.log(A - (K - (A+B)))
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
