const main = (input) => {
  input = input.trim()
  const n = BigInt(input)

  let ans = 0n

  if (n >= 1000n) ans += n - 999n
  if (n >= 1000000n) ans += n - 999999n
  if (n >= 1000000000n) ans += n - 999999999n
  if (n >= 1000000000000n) ans += n - 999999999999n
  if (n >= 1000000000000000n) ans += n - 999999999999999n

  return `${ans}`
}
