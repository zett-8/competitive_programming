const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const a = input[1]
  const b = input[2]

  const nums = Array.from({ length: n }).map((v, i) => i+1)

  const cmb = []

  const r = (arr, current) => {
    if (!arr.length) cmb.push(current.join(' '))

    for (let i=0; i<arr.length; i++) {
      const _arr = arr.slice(0)
      const v = _arr.splice(i, 1)[0]

      r(_arr, [...current, v])
    }
  }
  r(nums, [])


  for (let i=0, ai=null, bi=null; i<cmb.length; i++) {
    if (a === cmb[i]) ai = i+1
    if (b === cmb[i]) bi = i+1

    if (ai && bi) return Math.abs(ai - bi)
  }
}
