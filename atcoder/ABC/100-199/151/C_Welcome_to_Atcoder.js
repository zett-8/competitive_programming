const main = (input) => {
  input = input.trim().split('\n')
  const [n, m] = input[0].split(' ').map(Number)
  const q = input.slice(1)

  const his = {}
  let ans = 0
  let penalty = 0

  for (let i=0; i<m; i++) {
    const [pn, re] = q[i].split(' ')
    if (re === 'WA' && his[pn] !== 'AC') his[pn] = ~~his[pn]+1

    if (re === 'AC' && his[pn] !== 'AC') {
      penalty += ~~his[pn]
      ans++
      his[pn] = 'AC'
    }
  }

  return console.log(ans, penalty)
}
