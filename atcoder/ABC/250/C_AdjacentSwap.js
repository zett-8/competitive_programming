const main = (input) => {
  input = input.trim().split('\n')
  const [N, Q] = input[0].split(' ').map(Number)

  const ii = {}
  const ans = []

  for (let i=1; i<=N; i++) {
    ans.push(i)
    ii[i] = i-1
  }

  for (let i=0; i<Q; i++) {
    const target = input[i+1]
    const tIdx = ii[target]
    const swpIdx = tIdx === N-1 ? tIdx-1 : tIdx+1
    const swpTarget = ans[swpIdx]

    ;[ans[tIdx], ans[swpIdx]] = [ans[swpIdx], ans[tIdx]]
    ii[target] = swpIdx
    ii[swpTarget] = tIdx
  }

  return ans.join(' ')
}
