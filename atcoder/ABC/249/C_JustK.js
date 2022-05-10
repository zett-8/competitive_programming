const main = (input) => {
  input = input.trim().split('\n')

  const [n, k] = input[0].split(' ').map(Number)
  const s = ['']
  let ans = 0

  for (let i=0; i<n; i++) {
    const na = []
    for (let si=0; si<s.length; si++) na.push(s[si]+input[i+1])
    s.push(...na)
  }

  for (let i=0; i<s.length; i++) {
    const str = s[i]
    const o = {}
    let count = 0

    for (let si=0; si<str.length; si++) o[str[si]] = ~~o[str[si]] + 1

    Object.keys(o).forEach((key) => { if (o[key] === k) count++ })

    ans = Math.max(ans, count)
  }

  return ans
}
