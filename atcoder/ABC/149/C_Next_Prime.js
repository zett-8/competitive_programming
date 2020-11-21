const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const isPrime = (n) => {
  const p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

  for (let i=Math.floor(Math.sqrt(n)); i>1; i--) {
    if (n % i === 0) return false
  }

  return true
}

const main = (input) => {
  const s = Number(input.trim())

  for (let i=s; true; i++)
    if (isPrime(i)) return i
}
