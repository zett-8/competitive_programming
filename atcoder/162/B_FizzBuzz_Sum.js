const main = (input) => {
  const n = Number(input.trim())
  let ans = 0
  for (let i=1; i<=n; i++) if (i%3 && i%5) ans += i
  return console.log(ans)
}
