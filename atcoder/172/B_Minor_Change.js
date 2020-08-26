const main = (input) => {
  const [s, t] = input.trim().split('\n')

  let count = 0
  for (let i=0; i<s.length; i++) if (s[i] !== t[i]) count++
  return console.log(count)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
