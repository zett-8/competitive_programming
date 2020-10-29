const main = (input) => {
  input = input.trim().split('\n')
  const q = input[1].split(' ').map(Number)
  return console.log(q.length === Array.from(new Set(q)).length ? 'YES' : 'NO')
}
