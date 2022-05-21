const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const a = input[1].split(' ').map(Number)
  const b = input[2].split(' ').map(Number)

  const max = Math.max(...a)

  for (let i=0; i<k; i++)
    if (a[b[i]-1] === max) return 'Yes'

  return 'No'
}
