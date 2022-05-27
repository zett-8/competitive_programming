/**
 * https://atcoder.jp/contests/abc171/tasks/abc171_d
 */


const main = (input) => {
  const ip = input.trim().split('\n')
  const arr = ip[1].split(' ').map(v => parseInt(v, 10))
  const q_len = parseInt(ip[2])
  const q = ip.slice(3)


  const nums = {}
  let currentSum = BigInt(0)

  for (let v of arr) {
    currentSum += BigInt(v)
    nums[v] = ~~nums[v] + 1
  }

  for (let i = 0; i < q_len; i++) {
    const [pre, v] = q[i].split(' ').map(v => parseInt(v, 10))
    const dif = v - pre
    const count = ~~nums[pre]

    if (!count) {
      console.log(`${currentSum}`)
      continue
    }

    nums[v] = ~~nums[v] + count
    delete nums[pre]

    currentSum += BigInt(dif * count)
    console.log(`${currentSum}`)
  }
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
