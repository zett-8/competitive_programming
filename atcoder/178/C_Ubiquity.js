const mod = BigInt(10**9 + 7)

const pow = (x, n) => {
  let r = 1n

  for (let i=0; i<n; i++)
    r = r * x % mod

  return r
}

const main = (input) => {
  const n = BigInt(input.trim())

  let a = pow(10n, n)
  let bc = pow(9n, n)
  let d = pow(8n, n)

  const ans = (a-bc-bc+d) % mod
  return console.log(`${(ans + mod) % mod}`)
}
