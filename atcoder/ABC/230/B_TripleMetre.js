const main = (input) => {
  const t = 'oxx'.repeat(10)
  const s = input.trim()

  if (
    t.slice(0, s.length) === s ||
    t.slice(1, s.length+1) === s ||
    t.slice(2, s.length+2) === s
  ) return 'Yes'
  return 'No'
}
