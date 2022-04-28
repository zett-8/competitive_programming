const main = (input) => {
  const o = {}

  input.trim().split('\n')[1].split(' ').forEach(x => o[x] = ~~o[x] + 1)

  for (let key of Object.keys(o))
    if (o[key] < 4) return key
}
