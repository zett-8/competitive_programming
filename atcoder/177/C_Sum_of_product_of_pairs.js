const main = (input) => {
  input = input.trim().split('\n')
  const mod = BigInt(10**9 + 7)
  const arr = input[1].split(' ').map(BigInt)

  let sum = arr[0] + arr[1]
  let ans = arr[0] * arr[1] % mod

  for (let i=2; i<arr.length; i++) {
    ans += sum * arr[i] % mod
    sum += arr[i]
  }

  return console.log(Number(ans % mod))
}


process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
