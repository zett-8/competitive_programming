const main = (input) => {
  input = input.trim().split('\n')
  const [H, W, K] = input[0].split(' ').map(Number)
  const grid = input.slice(1)

  let ans = 0

  const r = (hr, wr, count) => {
    if (count === H + W) {
      let count = 0
      for (let h=0; h<H; h++) {
        if (hr.includes(h)) continue
        for (let w=0; w<W; w++) {
          if (wr.includes(w) && grid[h][w] === '#') count++
        }
      }
      if (count === K) ans++
      return null
    }

    if (count < H) {
      r([...hr, count], wr, count + 1)
      r(hr, wr, count + 1)
    } else {
      r(hr, [...wr, count - H], count + 1)
      r(hr, wr, count + 1)
    }
  }

  r([], [], 0)

  console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
