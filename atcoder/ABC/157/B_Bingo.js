const main = (input) => {
  input = input.trim().split('\n')

  const his = {}
  input.slice(0, 3).forEach((v, y) =>
    v.split(' ').forEach((n, x) => his[n] = y*3 + x)
  )

  const call = input.slice(4).map(Number)
  const ans = new Array(9).fill(false)
  for (let i=0; i<call.length; i++)
    if (his[call[i]] > -1) ans[his[call[i]]] = true

  if (
    (ans[0] && ans[0] === ans[1] && ans[1] === ans[2]) ||
    (ans[3] && ans[3] === ans[4] && ans[4] === ans[5]) ||
    (ans[6] && ans[6] === ans[7] && ans[7] === ans[8]) ||

    (ans[0] && ans[0] === ans[3] && ans[3] === ans[6]) ||
    (ans[1] && ans[1] === ans[4] && ans[4] === ans[7]) ||
    (ans[2] && ans[2] === ans[5] && ans[5] === ans[8]) ||

    (ans[0] && ans[0] === ans[4] && ans[4] === ans[8]) ||
    (ans[2] && ans[2] === ans[4] && ans[4] === ans[6])
  ) return console.log('Yes')
  else return console.log('No')
}
