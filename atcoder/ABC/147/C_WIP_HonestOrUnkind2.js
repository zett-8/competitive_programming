const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const count = (n) => {
  let count = 0

  n.toString(2).split('').forEach(v => {
    if (v === '1') count++
  })

  return count-1
}

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input.shift())

  const p = {}

  for (let i=0; i<n; i++) {
    const a = Number(input.shift())

    const testimony = []

    for (let x=0; x<a; x++) {
      const arr = input.shift().split(' ').map(Number)
      arr[0] = arr[0]-1
      testimony.push(arr)
    }

    p[i] = testimony
  }

  let ans = 0

  const check = (str) => {
    const arr = str.split('').map(Number)

    for (let i=0; i<n; i++) {
      if (arr[i]) {
        const tst = p[i]
        const re = tst.every(t => arr[t[0]] === t[1])

        if (!re) return false
      }
    }

    return true
  }

  for (let i=256; i<=parseInt('1'.repeat(n), 2)+256; i++) {
    if (check(i.toString(2).slice(-n)))
      ans = Math.max(ans, count(i))
  }

  return ans
}
