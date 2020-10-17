const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const x = input[1].split(' ').map(v => Math.abs(Number(v)))

  let M = 0
  let U = 0
  let C = 0

  for (let i=0; i<n; i++) {
    M += x[i]
    U += x[i]**2
    C = Math.max(C, x[i])
  }

  console.log(M)
  console.log(Math.sqrt(U))
  console.log(C)
}
