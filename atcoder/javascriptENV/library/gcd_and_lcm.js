const gcd = (a, b) => {
  if (!b) return a
  return gcd(b, a%b)
}

const lcm = (a, b) => {
  const gcd = (x, y) => {
    if (!y) return x
    return gcd(y, x%y)
  }

  return (a*b) / gcd(a, b)
}

// oneline
const gcd = (a, b) => { if (!b) { return a } return gcd(b, a%b) }
const lcm = (a, b) => { const gcd = (x, y) => { if (!y) { return x } return gcd(y, x%y) }; return (a*b) / gcd(a, b) }
