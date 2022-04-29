const main = (input) => {
  const n = Number(input.trim())

  const his = {}
  for (let i=1; i<=n; i++) {
    const s = String(i)
    his[`${s[0]}:${s[s.length-1]}`] = ~~his[`${s[0]}:${s[s.length-1]}`] + 1
  }

  let ans = 0
  for (let i=1; i<=n; i++) {
    const s = Array.from(String(i)).reverse()
    ans += ~~his[`${s[0]}:${s[s.length-1]}`]
  }

  return console.log(ans)
}
