const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const _dp = (y, x, v) => { const dp = new Array(y); for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v); return dp }

const main = (input) => {
  input = input.trim().split('\n')
  const [H, W] = input[0].split(' ').map(Number)
  const aGrid = Array.from({ length: H })
  const bGrid = Array.from({ length: H })

  for (let i=1; i<H+1; i++) aGrid[i-1] = input[i].split(' ').map(Number)
  for (let i=H+1; i<H+H+1; i++) bGrid[i-(H+1)] = input[i].split(' ').map(Number)

  const dp = _dp(H, W, null)

  dp[0][0] = [Math.abs(aGrid[0][0] - bGrid[0][0])]

  for (let h=0; h<H; h++) {
    for (let w=0; w<W; w++) {
      const diff = Math.abs(aGrid[h][w]-bGrid[h][w])

      if (h === 0 && w === 0) continue
      else if (h === 0) dp[h][w] = dp[h][w-1].flatMap(v => [v+diff, v-diff])
      else if (w === 0) dp[h][w] = dp[h-1][w].flatMap(v => [v+diff, v-diff])
      else dp[h][w] = [...dp[h][w-1], ...dp[h-1][w]].flatMap(v => [v+diff, v-diff])
    }
  }

  const arr = dp[H-1][W-1]
  let min = Infinity

  for (let i=0; i<arr.length; i++)
    if (arr[i] >= 0) min = Math.min(min, arr[i])

  return min
}
