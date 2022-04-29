const main = (input) => {
  input = input.trim().split('\n')
  const nums = input[1].split(' ').map(Number)

  let ans = 0

  for (let i=0; i<nums.length-1; i++) {
    if (nums[i] > nums[i+1]) {
      ans += nums[i] - nums[i+1]
      nums[i+1] = nums[i]
    }
  }

  return console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
