const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const [, ...q] = input

  let ans = 0n
  for (let i=0; i<n; i++) {
    const [a, b] = q[i].split(' ').map(BigInt)
    ans += (a+b) * (b-a+1n) / 2n
  }

  return console.log(`${ans}`)
}
