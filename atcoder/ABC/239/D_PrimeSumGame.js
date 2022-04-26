const main = (input) => {
  const [a, b, c, d] = input.trim().split(' ').map(Number)
  const isPrm = (n) => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199].includes(n)

  outer:
  for (let x=a; x<=b; x++) {
    for (let y=c; y<=d; y++)
      if (isPrm(x+y)) continue outer

    return 'Takahashi'
  }

  return 'Aoki'
}
