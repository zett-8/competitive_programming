const request = require('request')
const cheerio = require('cheerio')

const test = () => {
  const test_input = [
    // 1
    `3 3
---
+-+
+--
`,
    // 2
    `2 4
+++-
-+-+
`,
    // 3
    `1 1
-
`,
    // 4
    ``,
    // 5
    ``,
  ]
  const test_output = [
    // 1
    `Takahashi`,
    // 2
    `Aoki`,
    // 3
    `Draw`,
    // 4
    ``,
    // 5
    ``,
  ]

  for (let [i, v] of test_input.entries()) {
    if (!v) return

    console.log(`------ Test case ${i + 1} ------`)

    console.time()
    console.log(main(v))
    console.log(`[32m${test_output[i]}[0m`)
    console.timeEnd()
    console.log('----------------------------')

    console.log()
    console.log()
  }
}


// ======================================================================================================
// ======================================================================================================


const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const _dp = (y, x, v) => { const dp = new Array(y); for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v); return dp }

const main = (input) => {
  input = input.trim().split('\n')
  const [h, w] = input.shift().split(' ').map(Number)

  const dp = _dp(h, w, undefined)
  dp[0][0] = 0

  for (let y=0; y<h; y++) {
    for (let x=0; x<w; x++) {
      if (y+x === 0) continue

      const turn = (y+x)%2 === 0 ? 'Aoki' : 'Takahashi'
      const v = (input[y][x] === '+' ? 1 : -1) * (turn === 'Aoki' ? -1 : 1)

      const c1 = dp[y-1] ? dp[y-1][x] + v : null
      const c2 = dp[y][x-1] !== undefined ? dp[y][x-1] + v : null

      dp[y][x] = turn === 'Aoki' ? Math.min(c1??Infinity, c2??Infinity) : Math.max(c1??-Infinity, c2??-Infinity)
    }
  }
return dp
  const ans = dp.pop().pop()
  return ans === 0 ? 'Draw' : (ans > 0 ? 'Takahashi' : 'Aoki')
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : console.log(main(require('fs').readFileSync('dev/stdin', 'utf8'))))
  : console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))


// ======================================================================================================
// ======================================================================================================
