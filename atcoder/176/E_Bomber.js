const main = (input) => {
  input = input.trim().split('\n')
  const [h, w, m] = input[0].split(' ').map(Number)

  const hs = new Array(h).fill(0)
  const ws = new Array(w).fill(0)
  const bomb = new Map()

  for (let i=1; i<=m; i++) {
    const [hi, wi] = input[i].split(' ').map(Number)
    hs[hi-1]++
    ws[wi-1]++
    bomb.set(`${hi-1}:${wi-1}`, true)
  }

  let hmx = 0
  let wmx = 0

  let topH = []
  let topW = []

  for (let i=0; i<Math.max(hs.length, ws.length); i++) {
    if (hs[i] && hs[i] > hmx) {
      hmx = hs[i]
      topH = [[i, hs[i]]]
    }
    else if (hs[i] && hs[i] === hmx) topH.push([i, hs[i]])

    if (ws[i] && ws[i] > wmx) {
      wmx = ws[i]
      topW = [[i, ws[i]]]
    }
    else if (ws[i] && ws[i] === wmx) topW.push([i, ws[i]])
  }

  for (let x=0; x<topH.length; x++) {
    for (let y=0; y<topW.length; y++) {
      if (!bomb.has(`${topH[x][0]}:${topW[y][0]}`)) return console.log(hmx + wmx)
    }
  }
  return console.log(hmx + wmx - 1)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
