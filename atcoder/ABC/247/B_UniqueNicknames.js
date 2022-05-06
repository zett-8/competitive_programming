const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])

  const o = {}

  for (let i=0; i<n; i++) {
    const [a, b] = input[i+1].split(' ')
    o[a] = ~~o[a] + 1
    if (a !== b) o[b] = ~~o[b] + 1
  }

  for (let i=0; i<n; i++) {
    const [a, b] = input[i+1].split(' ')
    if (o[a] > 1 && o[b] > 1) return 'No'
  }

  return 'Yes'
}
