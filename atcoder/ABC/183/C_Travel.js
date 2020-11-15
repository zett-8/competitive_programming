const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const q = input.slice(1).map(v => v.split(' ').map(Number))

  let ans = 0

  const r = (stage, destinations, time) => {
    if (stage === null && time === k) ans++
    if (stage === null) return null;

    if (!destinations.length) r(null, [], time + q[stage][0])

    for (let i=0; i<destinations.length; i++) {
      const des = destinations[i]
      const arr = destinations.slice(0)
      arr.splice(i, 1)
      r(des, arr, time + q[stage][des])
    }
  }

  r(0, Array.from({ length: n-1 }).map((v, i) => i+1), 0)

  return ans
}
