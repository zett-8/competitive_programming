const main = (input) => {
  input = input.trim().split('\n')
  const [n, m] = input[0].split(' ').map(Number)

  if (m === 0) return 'Yes'

  const xt = Array.from({ length: n+1 })
  const yt = Array.from({ length: n+1 })
  for (let i=0; i<n+1; i++) {
    xt[i] = Array.from({ length: n+1 }).fill(0)
    yt[i] = Array.from({ length: n+1 }).fill(0)
  }

  for (let i=0; i<m; i++) {
    const [ax, ay] = input[i+1].split(' ').map(Number)
    xt[ax][ay] = 1
    xt[ay][ax] = 1
    const [bx, by] = input[i+1+m].split(' ').map(Number)
    yt[bx][by] = 1
    yt[by][bx] = 1
  }

  const mp = (arr, his) => {
    if (arr.length === n) return [arr]

    const r = []

    for (let i=1; i<=n; i++) {
      if (!his[i]) {
        const nh = JSON.parse(JSON.stringify(his))
        nh[i] = true
        r.push(...mp([...arr, i], nh))
      }
    }

    return r
  }

  const per = mp([], {})

  outer:
  for (let p of per) {
    for (let i=1; i<=n; i++)
      for (let j=1; j<=n; j++)
        if (xt[i][j] !== yt[p[i-1]][p[j-1]]) continue outer

    return 'Yes'
  }

  return 'No'
}
