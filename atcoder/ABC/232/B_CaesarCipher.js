const main = (input) => {
  const [s, t] = input.trim().split('\n')

  const dif = s.charCodeAt(0) - t.charCodeAt(0)

  for (let i=1; i<s.length; i++) {
    let x = s.charCodeAt(i) - dif
    if (x > 122) x -= 26
    if (x < 97) x += 26
    if (String.fromCharCode(x) !== t[i]) return 'No'
  }

  return 'Yes'
}
