const main = (input) => {
  const n = input.trim()

  let ans = Infinity

  const rcr = (idx, s) => {
    if (idx === n.length) {
      if (s && BigInt(s) % 3n === 0n) ans = Math.min(ans, n.length - s.length)
      return null
    }

    rcr(idx+1, s)
    rcr(idx+1, s+n[idx])
  }
  rcr(0, '')

  return console.log(ans === Infinity ? -1 : ans)
}
