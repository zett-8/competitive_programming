const main = (input) => {
  const a = '0abcdefghijklmnopqrstuvwxyz'
  let N = parseInt(input.trim(), 10)

  const ans = []
  while (N > 0) {
    let r = N % 26 || 26

    ans.unshift(a[r])

    N = (N - r) / 26
  }

  return console.log(ans.join(''))
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
