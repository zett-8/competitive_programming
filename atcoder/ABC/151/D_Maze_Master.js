const solve =(grid, h1, w1, h2, w2) => {
  grid[h1][w1] = '#'
  let q = [[h1, w1]]
  let count = 0

  while (q.length) {
    const current_q = q.slice(0)

    const next_q = []

    for (let i=0; i<current_q.length; i++) {
      const [h, w] = current_q[i]

      if (h === h2 && w === w2) return count

      grid[h][w] = '#'

      ;[[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(v => {
        const [hd, wd] = v
        if (grid[h+hd] && grid[h+hd][w+wd] && grid[h+hd][w+wd] !== '#') {
          next_q.push([h+hd, w+wd])
          grid[h+hd][w+wd] = '#'
        }
      })
    }

    q = next_q
    count++
  }

  return 0
}

const main = (input) => {
  input = input.trim().split('\n')
  const [H, W] = input[0].split(' ').map(Number)
  const [, ...g] = input
  const grid = g.map(v => v.split(''))

  let ans = 0

  for (let x=1; x<H*W; x++) {
    for (let y=x+1; y<=H*W; y++) {

      const a_h = Math.ceil(x/W) - 1
      const a_w = (x % W || W) - 1

      const b_h = Math.ceil(y/W) - 1
      const b_w = (y % W || W) - 1

      if (grid[a_h][a_w] === '#' || grid[b_h][b_w] === '#') continue

      const min = solve(JSON.parse(JSON.stringify(grid)), a_h, a_w, b_h, b_w)

      ans = Math.max(min, ans)
    }
  }
  return console.log(ans)
}
