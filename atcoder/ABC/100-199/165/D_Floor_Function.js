const main = (input) => {
  const [A, B, N] = input.trim().split(' ').map(Number)
  let x = B - 1 <= N ? B - 1 : N

  return console.log(Math.floor(A*x/B) - A * Math.floor(x/B))
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
