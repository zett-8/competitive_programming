const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const [, ...q] = input

  for (let x=0; x<n-2; x++) {
    for (let y=x+1; y<n-1; y++) {
      for (let z=y+1; z<n; z++) {
        const p_a = q[x].split(' ').map(Number)
        const p_b = q[y].split(' ').map(Number)
        const p_c = q[z].split(' ').map(Number)

        const a = Math.atan2(Math.abs(p_a[1] - p_b[1]), Math.abs(p_a[0] - p_b[0]))
        const b = Math.atan2(Math.abs(p_a[1] - p_c[1]), Math.abs(p_a[0] - p_c[0]))
        const c = Math.atan2(Math.abs(p_b[1] - p_c[1]), Math.abs(p_b[0] - p_c[0]))

        if (a === b && b === c) return console.log('Yes')
      }
    }
  }

  return console.log('No')
}
