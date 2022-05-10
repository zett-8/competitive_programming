const main = (input) => {
  input = input.trim().split('\n')
  const count = {}
  input[1].split(' ').forEach((e) => count[e] = ~~count[e] + 1)
  const a = Object.keys(count).map(Number).sort((a, b) => a - b)

  let ans = 0

  outer:
  for (let i=0; i<a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] * a[j] > a[a.length-1]) continue outer
      if (count[a[i] * a[j]])
        ans += count[a[i]] * count[a[j]] * count[a[i] * a[j]]
    }
  }

  return ans
}
