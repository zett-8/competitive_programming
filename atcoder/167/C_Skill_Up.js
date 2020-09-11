const main = (input) => {
  const [a, ...b] = input.trim().split('\n')
  const [n, m, x] = a.split(' ').map(Number)

  let ans = Infinity

  const r = (idx, arr, sum) => {
    if (arr.every(v => v >= x)) {
      ans = Math.min(sum, ans)
      return null
    }
    if (idx > n-1) return null

    const [price, ...study] = b[idx].split(' ').map(Number)

    const newSum = sum + price
    const newArr = arr.map((v, i) => v + study[i])

    r(idx+1, newArr, newSum)
    r(idx+1, arr, sum)
  }

  r(0, new Array(m).fill(0), 0)

  return console.log(ans === Infinity ? -1 : ans)
}
