const main = (input) => {
  input = input.trim().split('\n')
  const [n,] = input[0].split(' ').map(Number)
  const [, ...arr] = input

  const his = {}
  let count = 0

  for (let i=1; i<arr.length; i+=2)
    arr[i].split(' ').forEach(v => his[v] = 1)

  for (let i=1; i<=n; i++)
    if (~~his[i] === 0) count++

  return console.log(count)
}
