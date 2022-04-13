const main = (input) => {
  input = input.trim().split('\n')
  const a = input[0].split(' ')
  const b = input[1].split(' ')
  let count = 0

  for (let i=0; i<3; i++)
    if (a[i] !== b[i]) count++

  if (count === 0 || count === 3) return 'Yes'
  return 'No'
}
