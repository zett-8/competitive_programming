const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  const n = Number(input.trim())

  for (let a=1; a<=9; a++) {
    for (let b=1; b<=9; b++) {
      if (a*b === n) return 'Yes'
    }
  }

  return 'No'
}
