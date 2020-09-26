const main = (input) => {
  input = input.trim().split('\n')
  const nums = input[1].split(' ').map(Number)
  const [,,, ...diffs] = input

  let sum = 0
  const d = {}

  for (let i=0; i<nums.length; i++) {
    d[nums[i]] = ~~d[nums[i]] + 1
    sum += nums[i]
  }

  for (let i=0; i<diffs.length; i++) {
    const [a, b] = diffs[i].split(' ').map(Number)

    const count = ~~d[a]
    sum += (b - a) * count

    console.log(sum)

    delete d[a]
    d[b] = ~~d[b] + count
  }
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
