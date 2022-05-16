const main = (input) => {
  input = input.trim().split('\n')
  const N = Number(input[0])

  let ans
  let mx = 0
  const h = {}

  for (let i=0; i<N; i++) {
    const [str, scr] = input[i+1].split(' ')
    if (h[str]) continue

    h[str] = true

    if (mx < Number(scr)) {
      mx = Number(scr)
      ans = i+1
    }
  }

  return ans
}
