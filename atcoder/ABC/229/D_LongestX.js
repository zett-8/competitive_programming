const main = (input) => {
  const [s, c] = input.trim().split('\n')

  let ans = 0

  for (let l=0, r=0, dot=0, x=0; r<s.length;) {
    while (dot <= c && r < s.length) {
      ans = Math.max(ans, dot+x)
      if (s[r] === 'X') x++
      else dot++
      r++
    }

    while (dot > c && l < r) {
      if (s[l] === 'X') x--
      else dot--
      l++
    }

    ans = Math.max(ans, dot+x)
  }

  return ans
}
