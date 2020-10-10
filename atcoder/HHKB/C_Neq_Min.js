const main = (input) => {
  input = input.trim().split('\n')
  const N = Number(input[0])
  const q = input[1].split(' ').map(Number)

  const his = {}
  let re = 0

  for (let i=0; i<N; i++) {
    his[q[i]] = 1
    while (his[re]) re++
    console.log(re)
  }
}
