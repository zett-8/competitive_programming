const main = (input) => {
  const [R, X, Y] = input.trim().split(' ').map(Number)
  const dis = Math.sqrt(X**2 + (Y**2))

  if (dis < R) return 2
  if (dis % R === 0) return dis/R
  return Math.floor(dis/R)+1
}
