const main = (input) => {
  const [s, t] = input.trim().split('\n')
  let ans = Infinity

  for (let x=0; x <= s.length-t.length; x++) {
    let count = 0
    for (let tx=x, y=0; y<t.length; tx++, y++) if (s[tx] !== t[y]) count++
    ans = Math.min(ans, count)
  }

  return console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
