const main = (input) => {
  input = input.trim()
  const n = BigInt(input)

  let ans = 0

  for (let i=1; i<=1000000; i++) {
    if (n >= BigInt(String(i).repeat(2))) ans++
    if (n < BigInt(String(i).repeat(2))) break
  }

  return ans
}
