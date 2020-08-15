const main = (input) => {
  input = input.trim().split('\n')
  const n = parseInt(input[0], 10)
  const logs = input[1].split(' ').map(Number).sort((a, b) => a - b)

  let ans = 0

  const r = (idx, arr) => {
    if (arr.length === 3) {
      if (arr.length !== Array.from(new Set(arr)).length) return null
      if (arr[2] >= arr[0] + arr[1]) return null

      ans++
      return null
    }

    if (idx > logs.length-1) return null

    r(idx+1, arr)
    r(idx+1, [...arr, logs[idx]])
  }
  r(0, [])

  return console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
