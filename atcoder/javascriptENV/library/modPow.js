const modPow = (n, p, mod) => {
  [n, p, mod] = [n, p, mod].map(BigInt)

  if (p === 0n) return 1
  if (p === 1n) return Number(n)

  if (p % 2n === 1n)
    return Number(BigInt(modPow(n, (p-1n)/2n, mod)) ** 2n * n % mod)
  else
    return Number(BigInt(modPow(n, p/2n, mod)) ** 2n % mod)
}

// one line
const modPow = (n, p, mod) => { [n, p, mod] = [n, p, mod].map(BigInt); if (p === 0n) return 1; if (p === 1n) return Number(n); if (p % 2n === 1n) { return Number(BigInt(modPow(n, (p-1n)/2n, mod)) ** 2n * n % mod) } else { return Number(BigInt(modPow(n, p/2n, mod)) ** 2n % mod) }}
