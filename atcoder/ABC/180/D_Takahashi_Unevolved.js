const main = (input) => {
  let [x, y, a, b] = input.trim().split(' ').map(BigInt)

  let ex = 0n

  while (x < y) {
    const n = x * a

    if (n-x <= b) {
      ex++
      x = n
      if (x >= y) {
        ex--
        break
      }
    } else {
      const r = (y-x) / b
      ex += r * b === y-x ? r-1n : r
      break
    }
  }

  return console.log(`${ex}`)
}
