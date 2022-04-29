const main = (input) => {
  input = input.trim().split('\n')
  const [ch, cw] = input[1].split(' ').map(Number)
  const [dh, dw] = input[2].split(' ').map(Number)
  const [,,, ...g] = input
  const grid = g.map(v => v.split(''))

  const q = [[ch-1, cw-1, 0]]

  while (q.length) {
    const [h, w, cost] = q.shift()

    if (grid[h][w] === '.') grid[h][w] = cost
    else continue

    const steps = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    for (let [_h, _w] of steps)
      if (grid[h+_h] && grid[h+_h][w+_w] && grid[h+_h][w+_w] === '.')
        q.unshift([h+_h, w+_w, cost])

    for (let hh=h-2; hh<=h+2; hh++) {
      for (let ww=w-2; ww<=w+2; ww++) {
        if (
          (hh === h-1 && ww === w) ||
          (hh === h+1 && ww === w) ||
          (hh === h && ww === w-1) ||
          (hh === h && ww === w+1)
        ) continue
        if (grid[hh] && grid[hh][ww] && grid[hh][ww] === '.') q.push([hh, ww, cost+1])
      }
    }
  }

  return console.log(typeof grid[dh-1][dw-1] === 'number' ? grid[dh-1][dw-1] : -1)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
