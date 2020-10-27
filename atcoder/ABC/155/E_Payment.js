const main = (input) => {
  const n = input.trim()

  let ans = 0
  let carry = 0

  for (let i=n.length-1; i>=0; i--) {
    const m = Number(n[i]) + carry
    carry = 0

    if (m > 5 || (m === 5 && Number(n[i-1]) >= 5)) {
      ans += 10 -m
      carry++
    }
    else ans += m
  }

  return console.log(ans + carry)
}
