const main = (input) => {
  input = input.trim().split('\n')
  let s = input[0]
  const qn = Number(input[1])
  const [,, ...q] = input

  let cnv = false

  for (let i=0; i<qn; i++) {
    const [a, b, c] = q[i].split(' ')

    if (a === '1') {
      cnv = !cnv
    } else {
      if ((b === '1' && !cnv) || (b === '2' && cnv)) {
        s = c + s
      } else {
        s = s + c
      }
    }
  }

  return console.log(cnv ? s.split('').reverse().join('') : s)
}
