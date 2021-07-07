const main = (input) => {
  input = input.trim().split('\n')

  const N = Number(input.shift())
  const S = input.shift().split('')
  const Q = input.shift()
  const qry = input

  let flipped = false

  for (let i=0; i<Q; i++) {
    const [q, a, b] = qry[i].split(' ').map(Number)

    if (q === 2) flipped = !flipped
    else {
      let ai
      let bi

      if (flipped) {
        ai = a > N ? a-1-N : a-1+N
        bi = b > N ? b-1-N : b-1+N
      } else {
        ai = a-1
        bi = b-1
      }

      const tmp = S[ai]
      S[ai] = S[bi]
      S[bi] = tmp
    }
  }

  return flipped ? S.slice(N).join('') + S.slice(0, N).join('') : S.join('')
}
