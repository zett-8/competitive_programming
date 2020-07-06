/**
 * WIP
 */


const main = (input) => {
  input = input.trim().split('\n')
  const [N, K] = input[0].split(' ').map(Number)
  let nums = input[1].split(' ').map(Number).sort((a, b) => Math.abs(b) - Math.abs(a))
  const mod = 10**9 + 7

  const plus_arr = []
  const minus_arr = []

  while (nums.length) {
    const t = nums.shift()

    if (t >= 0) {
      plus_arr.push(t)
    } else {
      minus_arr.push(t)
    }
  }

  let minus = minus_arr.length

  const ans_arr = []
  // ans will be minus value
  if ((minus === nums.length && minus % 2) || (N === K && minus % 2)) {
    while (ans_arr.length !== K) {
      ans_arr.push(Math.abs(plus_arr[plus_arr.length - 1]) > Math.abs(minus_arr[minus_arr.length - 1]) ? minus_arr.pop() : plus_arr.pop())
    }
  } else {

    while (ans_arr.length < K) {
      if (ans_arr.length+1 === K) {
        ans_arr.push(plus_arr.shift())
        break
      }

      if (plus_arr.length < 2) {
        while (ans_arr.length !== K) ans_arr.push(minus_arr.shift())
        break
      }

      if (minus_arr.length < 2) {
        while (ans_arr.length !== K) ans_arr.push(plus_arr.shift())
        break
      }

      const p = plus_arr[0] * plus_arr[1]
      const m = minus_arr[0] * minus_arr[1]

      ans_arr.push(p > m ? plus_arr.shift() : minus_arr.shift())
      ans_arr.push(p > m ? plus_arr.shift() : minus_arr.shift())
    }
  }
  console.log(ans_arr)
  console.log(ans_arr.reduce((a, b) => a * b, 1) % mod)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
