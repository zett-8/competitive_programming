const main = (input) => {
  const [x, y] = input.trim().split(' ')

  let ans = 'No'

  for (let i=0; i<=x; i++) {
    const turtle = (x-i) * 4
    const crane = i * 2
    if (turtle + crane === Number(y)) ans = 'Yes'
  }
  console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
