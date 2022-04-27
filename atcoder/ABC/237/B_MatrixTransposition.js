const main = (input) => {
  input = input.trim().split('\n')

  const [H, W] = input[0].split(' ').map(Number)
  const arr = []

  for (let i=0; i<H; i++) {
    const row = input[i+1].split(' ')

    for (let r=0; r<row.length; r++) {
      if (!i) arr[r] = []
      arr[r][i] = row[r]
    }
  }

  return arr.map((r) => r.join(' ')).join('\n')
}
