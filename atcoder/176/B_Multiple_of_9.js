const main = (input) => {
  const n = input.trim()

  let ans = 0
  for (let v of n) ans += parseInt(v, 10)

  return console.log(ans % 9 === 0 ? 'Yes' : 'No')
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
