const main = (input) => {
  const [a, b] = input.trim().split(' ')

  for (let i=1; i<=Math.min(a.length, b.length); i++)
    if (Number(a[a.length-i]) + Number(b[b.length-i]) >= 10) return 'Hard'

  return 'Easy'
}
