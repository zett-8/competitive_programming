const main = (input) => {
  const n = Number(input.trim())

  let ans = 0

  for (let i=n-1; i>=1; i--)
    ans += n / i

  return ans
}
