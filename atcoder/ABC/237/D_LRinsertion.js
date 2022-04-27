const main = (input) => {
  input = input.trim().split('\n')
  const n = parseInt(input[0], 10)
  const s = input[1]

  const ans = [[null, -1,  1], [0, 0, null]]

  for (let i=0; i<n; i++) {
    const LR = s[i]
    const target = ans[i+1]

    if (LR === 'L') {
      const oriLeftIdx = target[0]
      target[0] = i+2
      ans[i+2] = [oriLeftIdx, i+1, target[1]+1]
      if (ans[oriLeftIdx]) ans[oriLeftIdx][2] = i+2
    }

    if (LR === 'R') {
      const oriRightIdx = target[2]
      target[2] = i+2
      ans[i+2] = [target[1]+1, i+1, oriRightIdx]
      if (ans[oriRightIdx]) ans[oriRightIdx][0] = i+2
    }
  }

  let a = ans[ans[0][2]]
  let as = []

  while (a) {
    as.push(a[1])
    a = ans[a[2]]
  }

  return as.join(' ')
}
