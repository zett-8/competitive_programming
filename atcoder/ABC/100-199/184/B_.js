const main = (input) => {
  input = input.trim().split('\n')
  const [n, x] = input[0].split(' ').map(Number)
  const s = input[1]

  let score = x

  for (let i=0; i<n; i++) {
    if (s[i] === 'o') score++
    else score = Math.max(0, score-1)
  }

  return score
}
