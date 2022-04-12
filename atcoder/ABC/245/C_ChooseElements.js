const main = (input) => {
  input = input.trim().split('\n')
  const [N, K] = input[0].split(' ').map(Number)
  const A = input[1].split(' ').map(Number)
  const B = input[2].split(' ').map(Number)

  const x = [[A[0], B[0]]]

  for (let i=0; i<N-1; i++) {
    const [a, b] = x[i]
    x[i+1] = [null, null]

    if (!a && !b) break

    if (Math.abs(A[i+1] - a) <= K || Math.abs(A[i+1] - b) <= K)
      x[i+1][0] = A[i+1]

    if (Math.abs(B[i+1] - a) <= K || Math.abs(B[i+1] - b) <= K)
      x[i+1][1] = B[i+1]
  }

  if (x[N-1] && (x[N-1][0] || x[N-1][1])) return 'Yes'

  return 'No'
}
