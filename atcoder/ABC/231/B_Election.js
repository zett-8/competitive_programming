const main = (input) => {
  input = input.trim().split('\n')
  const N = Number(input[0])
  const a = {}
  for (let i=0; i<N; i++) a[input[i+1]] = ~~a[input[i+1]] + 1
  let ans = [0, '']

  for (let k of Object.keys(a))
    if (a[k] > ans[0]) ans = [a[k], k]

  return ans[1]
}
