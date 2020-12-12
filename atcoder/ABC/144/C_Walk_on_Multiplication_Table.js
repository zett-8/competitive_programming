const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  const n = Number(input.trim())

  for (let i=Math.floor(Math.sqrt(n)); i>0; i--) {
    if (n % i === 0) {
      const [a, b] =[i, n/i]
      return (a-1) + (b-1)
    }
  }
}
