const primeFactorization = (n) => {
  const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]
  const ans = []

  const isPrime = (v) => {
    if (v < 2) return false
    for (let i=2; i<=Math.floor(Math.sqrt(v)); i++)
      if (v % i === 0) return false
    return true
  }

  outer:
  while (n > 1) {
    for (let i=0; i<primes.length; i++) {
      if (n % primes[i] === 0) {
        n = n/primes[i]
        ans.push(primes[i])
        continue outer
      }
    }

    for (let i=2003; i<=n; i++) {
      if (isPrime(i) && n % i === 0) {
        n = n/i
        ans.push(i)
        break
      }
    }
  }

  return Array.from(new Set(ans))
}
