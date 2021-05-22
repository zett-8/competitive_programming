const main = (input) => {
  input = input.trim()
  const [n, k] = input.split(' ').map(Number)

  let a = n

  for (let i=0; i<k; i++) {
    const s = Array.from(String(a)).sort()

    a = Math.abs(Number(s.join('')) - Number(s.reverse().join('')))
  }

  return a
}
