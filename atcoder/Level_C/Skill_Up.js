const main = (input) => {
  const [a, ...b] = input.trim().split('\n')
  const [, M, X] = a.split(' ').map(v => parseInt(v, 10))
  const q = b.map(v => v.split(' ').map(x => parseInt(x, 10)))

  let ans = Infinity

  const r = (bought, books) => {
    if (!books.length) {
      let sum = 0
      const arr = new Array(M).fill(0)

      for (let b of bought) {
        sum += b[0]
        for (let i=1; i<=M; i++) arr[i-1] += b[i]
      }

      if (Math.min(...arr) >= X) ans = Math.min(ans, sum)
      return null
    }

    const [first, ...rest] = books
    r(bought, rest)
    r([...bought, first], rest)
  }

  r([], q)

  return console.log(ans === Infinity ? -1 : ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
