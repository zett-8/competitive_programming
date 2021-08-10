const main = (input) => {
  input = input.trim().split('\n')
  const N = Number(input[0])
  const A = input[1].split(' ')
  const B = input[2].split(' ')
  const C = input[3].split(' ')

  const ao = {}
  const co = {}

  for (let i=0; i<N; i++) {
    ao[A[i]] = ~~ao[A[i]] + 1
    co[B[Number(C[i])-1]] = ~~co[B[Number(C[i])-1]] + 1
  }

  let ans = 0

  Object.keys(ao).forEach(n => ans += ao[n] * ~~co[n])

  return ans
}
