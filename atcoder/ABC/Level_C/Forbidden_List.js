const main = (input) => {
  let [a, b] = input.trim().split('\n')
  b = b || ''

  const [X, N] = a.split(' ').map(v => Number(v))
  const nums = b.split(' ').map(v => Number(v))

  if (N === 0) {
    console.log(X)
    return null
  }

  let abs = 0

  while (true) {
    if (nums.indexOf(X - abs) === -1) {
      console.log(X - abs)
    } else if (nums.indexOf(X + abs) === -1) {
      console.log(X + abs)
    } else {
      abs++
      continue
    }
    return null
  }
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
