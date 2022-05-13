// dependencies
// - dp

/*

  Find the Longest Common Subsequences

  s1: ABCDCE
  s2: ACCDEX
  LCS: “ACCE” or “ACDE”

 */

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
// const lcs = (t,e)=>{const l=_dp(t.length+1,e.length+1,0);for(let n=1;n<=t.length;n++)for(let h=1;h<=e.length;h++)t[n-1]===e[h-1]?l[n][h]=l[n-1][h-1]+1:l[n][h]=Math.max(l[n-1][h],l[n][h-1]);for(let n="",h=t.length,g=e.length;;){if(0===l[h][g])return n;l[h][g]===l[h][g-1]?g--:l[h][g]===l[h-1][g]?h--:(n=t[h-1]+n,g--,h--)}};
