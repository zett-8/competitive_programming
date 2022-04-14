const main = (input) => {
  input = input.trim().split('\n')
  const N = parseInt(input[0], 10)
  const S = input[input.length-1]

  const o = {}

  for (let i=1; i<=N; i++) {
    const [x, y] = input[i].split(' ').map(Number)
    if (o[y]) o[y].push([x, i-1])
    else o[y] = [[x, i-1]]
  }

  for (let key of Object.keys(o)) {
    if (o[key].length >= 1) {
      const arr = o[key]

      arr.sort((a, b) => a[0] - b[0])

      let r_count = false
      for (let i=0; i<arr.length; i++) {
        if (S[arr[i][1]] === 'R') r_count = true
        if (S[arr[i][1]] === 'L' && r_count) return 'Yes'
      }
    }
  }

  return 'No'
}
