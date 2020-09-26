const main = (input) => {
  const X = BigInt(input.trim())
  let saving = 100n
  let ans = 0

  while (saving < X) {
    saving = saving * 101n / 100n
    ans++
  }

  return console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
