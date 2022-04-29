const main = (input) => {
  input = input.trim().split('\n')

  const [N, Qn] = input[0].split(' ').map(Number)
  const A = input[1].split(' ')

  const o = {}
  for (let i=0; i<N; i++) {
    const num = A[i]
    if (!o[num]) o[num] = []
    o[num].push(i)
  }

  const ans = []

  for (let i=0; i<Qn; i++) {
    const [x, k] = input[i+2].split(' ')
    if (o[x] && o[x][k-1] !== undefined) ans.push(o[x][k-1]+1)
    else ans.push(-1)
  }

  return ans.join('\n')
}
