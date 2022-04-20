const main = (input) => {
  input = input.trim().split('\n')
  const [N, M] = input[0].split(' ').map(Number)
  const A = input[1].split(' ').map(Number).sort((a, b) => a - b)
  const B = input[2].split(' ').map(Number).sort((a, b) => a - b)

  if (N < M) return 'No'

  for (let t=0, found=false, m=0; m<M; m++) {
    found = false
    for (let n=t; n<N; n++) {
      if (A[n] > B[m]) return 'No'
      if (A[n] === B[m]) {
        A[n] = '.'
        t=n+1
        found = true
        break
      }
    }
    if (!found) return 'No'
  }

  return 'Yes'
}
