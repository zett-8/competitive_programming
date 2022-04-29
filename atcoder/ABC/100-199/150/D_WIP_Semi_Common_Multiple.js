const lcm = (a, b) => { const gcd = (x, y) => { if (!y) { return x } return gcd(y, x%y) }; return (a*b) / gcd(a, b) }

const main = (input) => {
  input = input.trim().split('\n')
  const [, m] = input[0].split(' ').map(BigInt)
  const q = Array.from(new Set(input[1].split(' '))).map(BigInt)

  let CM = q[0]
  let halfCM

  for (let i=1; i<q.length; i++) CM = lcm(CM, q[i])
  halfCM = CM / 2n

  return `${(m-halfCM) / CM + (halfCM < m ? 1n : 0n)}`
}
