const main = (input) => {
  input = input.trim().split('\n')
  const q = Number(input[0])

  const arr = []
  const ans = []
  let idx = 0

  for (let i=0; i<q; i++) {
    const [t, a, b] = input[i+1].split(' ').map(BigInt)

    if (t === 1n) {
      arr.push([a, b])
      continue
    }

    let count = a
    let sum = 0n

    while (count) {
      if (arr[idx][1] > count) {
        arr[idx][1] = arr[idx][1] - count
        sum += arr[idx][0] * count
        count = 0
      } else {
        sum += arr[idx][0] * arr[idx][1]
        count -= arr[idx][1]
        idx++
      }
    }

    ans.push(sum)
  }

  return ans.join('\n')
}
