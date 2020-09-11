const main = (input) => {
  let [a, b,, k] = input.trim().split(' ').map(Number)

  let ans = Math.min(a, k)

  k -= a
  k -= b

  if (k > 0) ans -= k

  return console.log(ans)
}
