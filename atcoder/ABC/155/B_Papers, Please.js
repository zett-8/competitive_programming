const main = (input) => {
  input = input.trim().split('\n')
  const q = input[1].split(' ').map(Number).filter(v => v % 2 === 0)
  return console.log(q.every(v => !(v % 3) || !(v%5)) ? 'APPROVED' : 'DENIED')
}
