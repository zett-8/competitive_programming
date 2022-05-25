const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ')
  const h = Array(n)

  for (let i=n-1; i>1; i--) {
    const o = JSON.parse(JSON.stringify(h[i+1] || { sum: 0 }))
    o.sum++
    o[q[i]] = ~~o[q[i]] + 1
    h[i] = o
  }

  let ans = 0

  for (let i=0; i<n-2; i++) {
    for (let j=i+1; j<n-1; j++) {
      if (q[i] === q[j]) continue
      ans += h[j+1].sum - ~~h[j+1][q[i]] - ~~h[j+1][q[j]]
    }
  }

  return ans
}
