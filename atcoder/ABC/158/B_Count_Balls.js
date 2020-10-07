const main = (input) => {
  const [n, a, b] = input.trim().split(' ').map(BigInt)

  const c = n / (a+b)
  let r = BigInt(n % (a+b))
  r = r > a ? a : r

  return console.log(`${c * a + r}`)
}
