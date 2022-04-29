const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  const [a, b, x] = input.trim().split(' ').map(Number)
  const h = x/(a**2)

  let radian = null

  if (2*h + a >= a + b) {
    // under 45
    const s = 2 * (a*b - a*h) / a
    radian = Math.atan2(s, a)
  }
  else {
    // over 45
    const s = 2*a*h / b
    radian = Math.atan2(b, s)
  }

  // convert radian to degree
  return radian / (2*Math.PI) * 360
}
