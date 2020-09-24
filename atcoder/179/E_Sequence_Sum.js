const main = (input) => {
  let [n, x, m] = input.trim().split(' ').map(Number)

  const his = [x]
  let pre = x

  let beforeLoop_sum
  let size
  let loopSum
  let loopSize

  while (true) {
    pre = pre**2 % m

    const idx = his.indexOf(pre)

    if (idx !== -1) {
      size = his.length
      beforeLoop_sum = his.slice(0, idx).reduce((a, b) => a+b, 0)

      const l = his.slice(idx)
      loopSize = l.length
      loopSum = l.reduce((a, b) => a+b, 0)

      break
    }

    his.push(pre)
  }

  if (n > size) {
    let ans = 0
    const head = his.slice(0, size - loopSize)
    ans += head.reduce((a, b) => a + b, 0)

    n -= head.length

    const count = Math.floor(n / loopSize)
    const remain = n % loopSize

    ans += loopSum * count
    ans += his.slice((size - loopSize), (size - loopSize) + remain).reduce((a, b) => a + b, 0)

    return console.log(ans)
  } else {
    return console.log(`${his.slice(0, n).reduce((a, b) => a + BigInt(b), 0n)}`)
  }
}
