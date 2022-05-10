const main = (input) => {
  const s = input.trim()

  if (s.toUpperCase() === s || s.toLowerCase() === s) return 'No'

  return Array.from(new Set(s.split(''))).length === s.length ? 'Yes' : 'No'
}
