const main = (input) => {
  const [, n] = input.trim().split('\n')
  const LIMIT = BigInt(10 ** 18)
  const nums = n.trim().split(' ').map(v => parseInt(v, 10)).sort((a, b) => a - b)

  if (nums[0] === 0) return console.log(0)

  let ans = BigInt(1)
  for (let v of nums) {
    ans = ans * BigInt(v)
    if (ans > LIMIT) return console.log(-1)
  }

  return ans > LIMIT ? console.log(-1) : console.log(ans.toString())
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
