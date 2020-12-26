const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const gcd = (a, b) => { if (!b) { return a } return gcd(b, a%b) }

const divisors = (n) => {
  const re = []

  for (let i=1; i<=n**0.5; i++) {
    if (n % i === 0) {
      re.push(i)
      if (n/i !== 1) re.push(n/i)
    }
  }

  return re.sort((a, b) => a - b)
}

const isPrime = (v) => {
  if (v < 2) return false
  for (let i=2; i<=Math.floor(Math.sqrt(v)); i++)
    if (v % i === 0) return false
  return true
}

const main = (input) => {
  const [a, b] = input.trim().split(' ').map(Number)

  const dvs = divisors(gcd(a, b))

  let ans = 0

  for (let i=0; i<dvs.length; i++)
    if (isPrime(dvs[i])) ans++

  return ans+1
}
