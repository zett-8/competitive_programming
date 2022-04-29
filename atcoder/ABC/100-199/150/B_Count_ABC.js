const main = (input) => {
  const [n, s] = input.trim().split('\n')

  let count = 0
  for (let i=0; i<Number(n)-2; i++) if (s[i] === 'A' && s[i+1] === 'B' && s[i+2] === 'C') count++
  return count
}
