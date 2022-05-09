const main = (input) => {
  let [a, b, k] = input.trim().split(' ').map(BigInt)

  let ans = 0

  while (a < b) {
    a *= k
    ans++
  }

  return ans
}
