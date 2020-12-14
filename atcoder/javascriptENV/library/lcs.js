// dependencies
// - dp

const lcs = (s, t) => {
  const dp = _dp(s.length+1, t.length+1, 0)

  for (let y=1; y<=s.length; y++) {
    for (let x=1; x<=t.length; x++) {
      if (s[y-1] === t[x-1]) dp[y][x] = dp[y-1][x-1] + 1
      else dp[y][x] = Math.max(dp[y-1][x], dp[y][x-1])
    }
  }

  for (let ans='', y=s.length, x=t.length; true;) {
    if (dp[y][x] === 0) return ans

    else if (dp[y][x] === dp[y][x-1]) x--
    else if (dp[y][x] === dp[y-1][x]) y--
    else {
      ans = s[y-1] + ans
      x--
      y--
    }
  }
}

// one line
const lcs = (s, t) => { const dp = _dp(s.length+1, t.length+1, 0); for (let y=1; y<=s.length; y++) { for (let x=1; x<=t.length; x++) { if (s[y-1] === t[x-1]) { dp[y][x] = dp[y-1][x-1] + 1 } else { dp[y][x] = Math.max(dp[y-1][x], dp[y][x-1]) }}} for (let ans='', y=s.length, x=t.length; true;) { if (dp[y][x] === 0) { return ans } else if (dp[y][x] === dp[y][x-1]) { x-- } else if (dp[y][x] === dp[y-1][x]) { y-- } else { ans = s[y-1] + ans; x--; y-- }}}
