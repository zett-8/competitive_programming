const main = (input) => {
  const a = input.trim().split('\n')[1].split(' ').map(Number)

  let ans = -1
  for (let i=0; i<a.length; i++) {
    ans = Math.max(ans, a[i])
    if (a[i+1] && a[i] >= a[i+1]) break
  }

  return ans
}
