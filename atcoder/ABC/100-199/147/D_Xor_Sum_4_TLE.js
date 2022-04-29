const mod = BigInt(10**9 + 7)
const mlog = (v) => `${(v%mod+mod) % mod}`
const itbs = (n, length) => { let re = n.toString(2); length = Math.max(re.length, length); return '0'.repeat(length - re.length) + re }

const main = (input) => {
  input = input.trim().split('\n')
  const N = Number(input[0])
  const q = input[1].split(' ').map(BigInt)

  let ans = 0n

  for (let i=0; i<60; i++) {

    let one = 0
    let zero = 0

    // 'i'th digit from left for each num
    for (let n=0; n<N; n++) {
      const b = itbs(q[n], 60)[i]
      if (b === '0') zero++
      else one++
    }

    const cmb = one * zero

    let power = 1n

    for (let k=0; k<59-i; k++)
      power = power * 2n % BigInt(mod)

    ans += BigInt(cmb) * power % mod
  }

  return mlog(ans)
}
