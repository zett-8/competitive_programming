const main = (input) => {
  const k = parseInt(input.trim(), 10)

  const his = {}
  let last = 0
  let count = 0

  while (true) {
    const m = (last*10 + 7) % k
    count++

    if (m === 0) return console.log(count)
    if (his[m]) return console.log(-1)

    last = m
    his[m] = true
  }
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
