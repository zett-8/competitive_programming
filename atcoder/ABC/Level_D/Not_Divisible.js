const main = (input) => {
  const [, n] = input.trim().split('\n')
  const nums = n.split(' ').map(v => Number(v)).sort((a, b) => a - b)

  const max = nums[nums.length - 1]
  const arr = new Array(max+1).fill(0)

  for (let v of nums) {
    for (let i=v; i<=max; i+=v) arr[i]++
  }


  let ans = 0
  for (let v of nums) {
    if (arr[v] === 1) ans++
  }

  console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
