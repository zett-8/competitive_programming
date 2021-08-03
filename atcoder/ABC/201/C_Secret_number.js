const main = (input) => {
  let ans = 0
  const o = { 'x': [], 'o': [], '?': [] }
  const list = []

  input.trim().split('').forEach((v, i) => o[v].push(i))

  if (o.o.length > 4) return 0

  for (let i=0; i<10000; i++) {
    let s = String(i)
    while (s.length < 4) s = '0' + s
    list.push(s)
  }

  for (let i=0; i<list.length; i++) {
    const s = list[i]

    if (!o.x.every(v => !s.includes(v))) continue
    if (!o.o.every(v => s.includes(v))) continue

    ans++
  }

  return ans
}
