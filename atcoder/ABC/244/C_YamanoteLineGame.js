const reader = require('readline').createInterface({
    input: process.stdin
})

let arr
let N

reader.on('line', line => {
  const input = parseInt(line.trim(), 10)

  if (!N) {
    N = input
    arr = Array.from({ length: N * 2 + 2 })
    arr[1] = true
    console.log(1)
  } else {
    if (input === 0) return

    arr[input] = true

    for (let i=2; i<arr.length; i++) {
      if (!arr[i]) {
        arr[i] = true
        console.log(i)
        break
      }
    }
  }
})
