const main = (input) => {
  input = input.trim().split('\n')
  const [n,] = input[0].split(' ').map(Number)
  const [, ...arr] = input

  const lighthouse = [0, ...input[1].split(' ').map(BigInt)]
  const ans = [false, ...new Array(n).fill(true)]

  for (let i=0; i<arr.length; i++) {
    const [a, b] = arr[i].split(' ').map(Number)

    if (lighthouse[a] >= lighthouse[b]) ans[b] = false
    if (lighthouse[a] <= lighthouse[b]) ans[a] = false
  }

  let count = 0
  for (let i=1; i<ans.length; i++)
    if (ans[i]) count++

  return console.log(count)
}
