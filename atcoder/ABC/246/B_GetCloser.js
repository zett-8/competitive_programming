const main = (input) => {
  const [a, b] = input.trim().split(' ').map(Number)

  const ratio = 1 / Math.sqrt(a ** 2 + b ** 2)

  return `${a * ratio} ${b * ratio}`
}
