const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)

  const scr = Array(n).fill('').map((_, i) => input[i+1].split(' ').reduce((a, b) => a + Number(b), 0))
  const ranking = scr.slice().sort((a, b) => b - a)

  const threshold = ranking[k-1]
  const ans = []

  for (let v of scr)
    ans.push(threshold - v <= 300 ? 'Yes' : 'No')

  return ans.join('\n')
}
