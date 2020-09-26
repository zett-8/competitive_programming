const main = (input) => {
  input = input.trim().split('\n')
  const arr = input[1].split(' ').map(BigInt)

  if (arr.includes(0n)) return console.log(0)

  let ans = 1n
  for (let i=0; i<arr.length; i++) {
    ans *= arr[i]
    if (ans > BigInt(10**18)) return console.log(-1)
  }

  return console.log(`${ans}`)
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
