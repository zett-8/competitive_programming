const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  const n = Number(input.trim())

  let ans = 0

  for (let i=1; i<=n; i++) {
    const s = i.toString(10) + i.toString(8)

    let noSeven = true
    for (let x=0; x<s.length; x++)
      if (s[x] === '7') noSeven = false

    if (noSeven) ans++
  }

  return ans
}


// O(n)

const main = (input) => {
  input = input.trim().split('\n')
  const [H, W] = input[0].split(' ').map(Number)
  const grid = input.slice(1)

  for (let i=0; i<H; i++) grid[i] = grid[i].split(' ').map(Number)

  let ans = 0
  let min = grid[0][0]

  for (let count=0, h=0; h<H; h++) {
    for (let w=0; w<W; w++) {
      if (grid[h][w] > min) ans += grid[h][w] - min
      else {
        ans += count * (min - grid[h][w])
        min = grid[h][w]
      }

      count++
    }
  }
  return ans
}
