const main = (input) => {
  let k = BigInt(input.trim())

  let n = 2n ** 59n

  let ans = ''

  while (n > 0n) {
    if (n <= k) {
      ans += '2'
      k = k - n
    } else {
      if (ans) ans += '0'
    }

    n = n / 2n
  }

  return ans
}
