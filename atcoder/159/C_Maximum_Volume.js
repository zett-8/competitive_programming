const main = (input) => {
  const s = parseInt(input.trim(), 10)
  return console.log((s/3) ** 3)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
