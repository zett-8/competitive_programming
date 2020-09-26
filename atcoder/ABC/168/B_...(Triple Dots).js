const main = (input) => {
  const [K, S] = input.trim().split('\n')
  return console.log(S.length > Number(K) ? S.slice(0, Number(K))+'...' : S)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
