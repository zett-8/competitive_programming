const main = (input) => {
  // input
  input = input.trim().split('\n')
  const [H, W, n, m] = input[0].split(' ').map(Number)
  const n_q = input.slice(1, n+1)
  const m_q = input.slice(1+n)

  // make grid
  const grid = Array.from({ length: H }).fill(null)
  grid.map((v, i) => grid[i] = Array.from({ length: W }).fill(0))

  const lights = []

  for (let i=0; i<Math.max(n, m); i++) {
    if (n_q[i]) {
      const [y, x] = n_q[i].split(' ').map(Number)
      grid[y-1][x-1] = 'l'
      lights.push([y-1, x-1])
    }

    if (m_q[i]) {
      const [y, x] = m_q[i].split(' ').map(Number)
      grid[y-1][x-1] = '#'
    }
  }

  let ans = 0

  const exploit = (h, w, hd, wd, enough) => {
    if (grid[h][w] === '#' || grid[h][w] === enough) return null

    if (typeof grid[h][w] === 'number') {
      if (grid[h][w] === 0) ans++
      grid[h][w] = grid[h][w]+1
    }

    if (grid[h+hd] !== undefined && grid[h+hd][w+wd] !== undefined) exploit(h+hd, w+wd, hd, wd, enough)
  }

  for (let i=0; i<n; i++) {
    exploit(lights[i][0], lights[i][1], 1, 0, 1)
    exploit(lights[i][0], lights[i][1], -1, 0, 1)
  }
  for (let i=0; i<n; i++) {
    exploit(lights[i][0], lights[i][1], 0, 1, 2)
    exploit(lights[i][0], lights[i][1], 0, -1, 2)
  }

  return console.log(ans + n)
}
