const _dp = (y, x, v) => { const dp = new Array(y); for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v); return dp }

const main = (input) => {
  const mod = 10**9 + 7

  input = input.trim().split('\n')
  const [H, W] = input[0].split(' ').map(Number)
  const [, ...g] = input
  for (let i=0; i<g.length; i++) g[i] = g[i].split('')

  const dp = _dp(H, W, 0)
  for (let i=0; i<H; i++) if (g[i][0] === '#') { break } else { dp[i][0] = 1 }
  for (let i=0; i<W; i++) if (g[0][i] === '#') { break } else { dp[0][i] = 1 }

  for (let y=1; y<H; y++)
    for (let x=1; x<W; x++)
      dp[y][x] = g[y][x] === '#' ? 0 : (dp[y-1][x] + dp[y][x-1]) % mod

  console.log(dp[H-1][W-1])
}
