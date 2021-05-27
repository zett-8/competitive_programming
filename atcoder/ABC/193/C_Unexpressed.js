const main = (input) => {
  input = Number(input.trim())

  let ans = input
  const his = {}

  for (let a=2; true; a++) {
    if (a**2 > input) break
    for (let b=2; true; b++) {
      if (a**b > input) break
      if (!his[a**b]) ans--
      his[a**b] = true
    }
  }

  return ans
}
