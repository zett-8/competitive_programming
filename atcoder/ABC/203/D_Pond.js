const main = (input) => {
  input = input.trim().split('\n')

  const [N, K] = input[0].split(' ').map(Number)
  const park = input.slice(1).map(v => v.split(' ').map(BigInt))

  let ans = 10n**10n

  for (let h=0; h<N-K+1; h++) {
    for (let w=0; w<N-K+1; w++) {
      let sum = []

      for (let _h=h; _h<h+K; _h++) {
        sum.push(...park[_h].slice(w, w+K))
      }

      const mid = sum.sort((a, b) => a - b > 0n ? -1 : 0)[Math.floor(K**2/2)]

      ans = ans > mid ? mid : ans
    }
  }

  return ans.toString()
}
