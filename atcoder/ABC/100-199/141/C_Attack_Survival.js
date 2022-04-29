const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const [n, k, q] = input[0].split(' ').map(Number)

  const score = Array.from({ length: n }).fill(k-q)

  for (let i=0; i<q; i++)
    score[Number(input[i+1])-1]++

  const ans = []
  for (let i=0; i<n; i++) ans.push(score[i] > 0 ? 'Yes' : 'No')
  return ans.join('\n')
}

