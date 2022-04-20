const main = (input) => {
  input = input.trim().split('\n')
  const n = parseInt(input[0], 10)
  const grid = []

  for (let i=0; i<n; i++)
    grid[i] = input[i+1].split('')

  const search = (x, y) => {
    let hori = 0
    let ver = 0
    let dia = 0
    let lb_dia = 0

    for (let i=0; i<=5; i++) {
      try {
        if (grid[y][x+i] === '#') hori++
      } catch {
        hori -= 100
      }

      try {
        if (grid[y+i][x] === '#') ver++
      } catch {
        ver -= 100
      }

      try {
        if (grid[y+i][x+i] === '#') dia++
      } catch {
        dia -= 100
      }

      try {
        if (grid[y+i][x-i] === '#') lb_dia++
      } catch {
        lb_dia -= 100
      }
    }

    return (hori >= 4 || ver >= 4 || dia >= 4 || lb_dia >= 4)
  }

  for (let y=0; y<n; y++)
    for (let x=0; x<n; x++)
      if (search(x, y)) return 'Yes'

  return 'No'
}
