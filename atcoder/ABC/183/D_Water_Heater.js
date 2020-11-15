const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const main = (input) => {
  input = input.trim().split('\n')
  const [n, w] = input[0].split(' ').map(Number)
  const q = input.slice(1)

  const his = {}

  for (let i=0; i<n; i++) {
    const [s, t, p] = q[i].split(' ').map(Number)

    his[s] = BigInt(~~his[s]) + BigInt(p)
    his[t] = BigInt(~~his[t]) - BigInt(p)
  }

  const arr = Object.keys(his).sort((a, b) => Number(a) - Number(b))

  for (let i=0, current=0n; i<arr.length; i++) {
    current += his[arr[i]]
    if (current > BigInt(w)) return 'No'
  }

  return 'Yes'
}
