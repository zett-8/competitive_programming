const main = (input) => {
  let [x, k, d] = input.trim().split(' ').map(Number)
  x = Math.abs(x)

  const m = Math.min(k, Math.floor(x/d))
  x = x - (m*d)
  k -= m

  if (k % 2 === 0) return console.log(x)
  else return console.log(Math.min(Math.abs(x+d), Math.abs(x-d)))
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
