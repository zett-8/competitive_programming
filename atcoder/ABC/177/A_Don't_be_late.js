const main = (input) => {
  const [d, t, s] = input.trim().split(' ').map(Number)
  return console.log(d/s <= t ? 'Yes' : 'No')
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
