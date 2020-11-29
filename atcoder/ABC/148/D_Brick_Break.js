const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number)

  let next = 1
  let ans = 0

  for (let i=0; i<n; i++) {
    if (q[i] === next) next++
    else ans++
  }

  return ans === n ? -1 : ans
}
