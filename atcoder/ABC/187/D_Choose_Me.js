const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])

  let vote_pap = 0n
  const earns = []

  for (let i=1; i<=n; i++) {
    const [a, t] = input[i].split(' ').map(BigInt)
    vote_pap += a
    earns.push(a+a+t)
  }

  earns.sort((a, b) => a < b ? 1 : (a > b ? -1 : 0))

  for (let i=0; i<n; i++) {
    vote_pap -= earns[i]
    if (vote_pap<0) return i+1
  }
}


// dp solution (TLE)

const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const _dp = (y, x, v) => { const dp = new Array(y); for (let i=0; i<y; i++) dp[i] = new Array(x).fill(v); return dp }

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])

  const dp = _dp(n+1, n+1, null)

  const city = {}

  for (let y=0; y<=n; y++) {
    for (let x=0; x<=n; x++) {
      if (x===0) {
        dp[y][0] = [0n, 0n]
        continue
      }

      if (!city[x-1]) city[x-1] = input[x].split(' ').map(BigInt)
      const [a, t] = city[x-1]

      if (y===0) {
        dp[0][x] = [dp[0][x-1][0] + a, 0n]
        continue
      }

      // do speech
      const v1 = [dp[y-1][x-1][0], dp[y-1][x-1][1]]
      v1[1] += a + t
      // do not
      const v2 = [dp[y][x-1][0], dp[y][x-1][1]]
      v2[0] += a

      dp[y][x] = (v1[1] - v1[0]) > (v2[1] - v2[0]) ? v1 : v2

      if (x === n )
        if (dp[y][x][0] < dp[y][x][1]) return y
    }
  }
}
