const main = (input) => {
  const [a, b] = input.trim().split(' ').map(Number)

  for (let i=1; i<=10000; i++)
    if (Math.floor(i * 0.08) === a && Math.floor(i * 0.1)  === b)
      return console.log(i)

  return console.log(-1)
}
