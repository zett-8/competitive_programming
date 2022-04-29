const main = (input) => {
  const [n, k] = input.trim().split(' ').map(Number)

  let ans = 0

  for (let v=n; v !== 0; v = Math.floor(v / k)) ans++

  return console.log(ans)
}
