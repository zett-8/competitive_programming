const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input.shift())
  const q = input

  const tree = Array.from({ length: n }).map(() => [])

  for (let i=0; i<q.length; i++) {
    const [a, b] = q[i].split(' ').map(v => Number(v)-1)
    tree[a].push(b)
  }

  const his = {}
  let max_color = 0

  let queue = [[0, 0]]

  while (queue.length) {
    const [node, color] = queue.pop()

    let newColor = 1
    for (let i=0; i<tree[node].length; i++) {
      if (color === newColor) newColor++

      queue.push([tree[node][i], newColor])
      his[`${node+1}:${tree[node][i]+1}`] = newColor
      if (newColor > max_color) max_color = newColor
      newColor++
    }
  }

  const ans = [max_color]

  for (let i=0; i<q.length; i++)
    ans.push(his[q[i].split(' ').join(':')])

  return ans.join('\n')
}


// following code uses recurring function and it can't succeed because of maximum call stack

// const mod = 10**9 + 7
// const mlog = (v) => `${(v % mod + mod) % mod}`
//
// const main = (input) => {
//   input = input.trim().split('\n')
//   const n = Number(input.shift())
//   const q = input
//
//   const tree = Array.from({ length: n }).map(() => [])
//
//   for (let i=0; i<q.length; i++) {
//     const [a, b] = q[i].split(' ').map(v => Number(v)-1)
//     tree[a].push(b)
//   }
//
//   const his = {}
//
//   const dfs = (node, color) => {
//     let newColor = 1
//
//     tree[node].forEach(n => {
//       if (newColor === color) newColor++
//       dfs(n, newColor)
//       his[`${node+1}:${n+1}`] = newColor
//       newColor++
//     })
//   }
//
//   for (let i=0; i<tree[0].length; i++) {
//     dfs(tree[0][i], i+1)
//     his[`1:${tree[0][i]+1}`] = i+1
//   }
//
//   const ans = []
//
//   for (let i=0; i<q.length; i++) {
//     const x = q[i].split(' ').join(':')
//     ans.push(his[x])
//   }
//
//   ans.unshift(Math.max(...ans))
//
//   return ans.join('\n')
// }
