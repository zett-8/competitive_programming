const main = (input) => {
  input = input.trim().split('\n')
  const [_, w] = input[0].split(' ').map(Number)
  const cheese = input.slice(1).map((l) => l.split(' ').map(BigInt))
  cheese.sort((a, b) => a[0] < b[0] ? -1 : 1)

  let ans = 0n
  let available = w

  while (available && cheese.length) {
    const [taste, gram] = cheese.pop()

    if (gram >= available) {
      ans += taste * BigInt(available)
      break
    } else {
      available -= Number(gram)
      ans += taste * gram
    }
  }

  return ans.toString()
}
