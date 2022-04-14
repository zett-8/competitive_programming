const main = (input) => {
  input = input.trim().split('\n')

  const N = parseInt(input[0], 10)
  const a = input[1].split(' ').map(Number)
  const b = input[2].split(' ').map(Number)

  let perfect = 0
  let partially = 0

  const p = {}

  for (let i=0; i<N; i++) {
    if (a[i] === b[i]) perfect++
    p[a[i]] = ~~p[a[i]] + 1
    p[b[i]] = ~~p[b[i]] + 1
  }

  Object.keys(p).forEach((k) => {
    if (p[k] === 2) partially++
  })

  return `${perfect}${'\n'}${partially-perfect}`
}
