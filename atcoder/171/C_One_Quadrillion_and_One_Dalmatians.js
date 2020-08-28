const main = (input) => {
  let n = BigInt(input.trim())
  const alpha = 'zabcdefghijklmnopqrstuvwxyz'
  let ans = []

  while (n > 0n) {
    const r = n % 26n || 26n
    ans.unshift(alpha[`${r}`])
    n = (n-r) / 26n
  }

  return console.log(ans.join(''))
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
