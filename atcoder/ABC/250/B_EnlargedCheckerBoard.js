const main = (input) => {
  const [n, a, b] = input.trim().split(' ').map(Number)

  let ns = ''
  let rs = ''
  const ans = []

  for (let x='.', y='#'; ns.length<n*b;) {
    ns += x.repeat(b)
    rs += y.repeat(b)
    ;[x, y] = [y, x]
  }

  for (let r=false; ans.length<n*a; r=!r)
    for (let i=0; i<a; i++) ans.push(r ? rs : ns)

  return ans.join('\n')
}
