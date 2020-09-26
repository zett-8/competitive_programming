const main = (input) => {
  const n = parseInt(input.trim(), 10)

  let ans = 0

  for (let i=1; i<=n; i++) {
    const c = Math.floor(n / i)
    ans += (i + c*i) * c / 2
  }

  return console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
