const main = (input) => {
  input = input.trim().split('\n')

  const obj = {}
  input[1].split(' ').forEach(n => obj[n] = ~~obj[n]+1)
  const nums = Object.keys(obj).map(Number)

  let ans = 0

  for (let a=0; a<nums.length-1; a++) {
    for (let b=a+1; b<nums.length; b++) {
      ans += (nums[a] - nums[b]) ** 2 * obj[nums[a]] * obj[nums[b]]
    }
  }

  return ans
}
