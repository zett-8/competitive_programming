const main = (input) => {
  input = input.trim().split('\n')
  const [n, m] = input[0].split(' ').map(Number)
  const [, ...q] = input

  let ans = n === 1 ? ['0'] : String(10 ** (n-1)).split('')

  const his = {}
  for (let i=0; i<m; i++) {
    const [s, c] = q[i].split(' ').map(Number)

    if (his[s] !== undefined && his[s] !== c) return console.log(-1)

    his[s] = c

    ans[s-1] = String(c)
  }

  return console.log(n > 1 && ans[0] === '0' ? -1 : ans.join(''))
}
