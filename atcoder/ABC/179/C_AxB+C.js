const main = (input) => {
  const n = Number(input.trim())

  let count = 0

  for (let i=1; i<n; i++) count += Math.ceil(n / i) - 1

  return console.log(count)
}
