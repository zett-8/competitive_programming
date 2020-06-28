const main = (input) => {
  const [a, ...qs] = input.trim().split('\n')
  const [N,] = a.split(' ').map(Number)
  const q = qs.map(v => v.split(' ').map(Number))
  const cave = new Array(N+1).fill().map(() => [])

  for (let [a, b] of q) {
    cave[a].push(b)
    cave[b].push(a)
  }

  const visited = { '1': true }
  const ans = ['Yes', ...new Array(N).fill(0)]
  let queue = [1]

  while (queue.length) {
    const nextQ = []
    while (queue.length) {
      const v = queue.shift()
      const links = cave[v]

      for (let l of links) {
        if (visited[l]) continue
        nextQ.push(l)
        ans[l] = v
        visited[l] = true
      }
    }

    queue = nextQ
  }

  for (let i=0; i<=N; i === 0 ? i+=2 : i++) console.log(ans[i])
  return null
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
