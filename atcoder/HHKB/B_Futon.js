const main = (input) => {
  input = input.trim().split('\n')
  const [H, W] = input[0].split(' ').map(Number)
  let [, ...q] = input

  q = q.map(v => v.split(''))

  let ans = 0

  for (let y=0; y<H; y++) {
    for (let x=0; x<W; x++) {
      if (q[y][x] === '#') continue

      if (q[y-1] && q[y-1][x] === '.') ans++
      if (q[y+1] && q[y+1][x] === '.') ans++
      if (q[y][x-1] && q[y][x-1] === '.') ans++
      if (q[y][x+1] && q[y][x+1] === '.') ans++

      q[y][x] = '#'
    }
  }

  return console.log(ans)
}
