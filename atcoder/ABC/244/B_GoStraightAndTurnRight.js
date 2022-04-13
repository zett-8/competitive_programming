const main = (input) => {
  input = input.trim().split('\n')

  const S = input[1].split('')
  const C = [0, 0]
  const D = [[1, 0], [0, -1], [-1, 0], [0, 1]]
  let D_index = 0

  for (let s of S) {
    if (s === 'R') {
      D_index = D_index <= 2 ? D_index + 1 : 0
      continue
    }

    C[0] += D[D_index][0]
    C[1] += D[D_index][1]
  }

  return C.join(' ')
}
