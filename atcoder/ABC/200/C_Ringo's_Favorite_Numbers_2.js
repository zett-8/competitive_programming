const main = (input) => {
  input = input.trim().split('\n')
  const arr = input[1].split(' ').map(Number)

  const mod200 = {}
  arr.forEach(n => mod200[n%200] = ~~mod200[n%200]+1)

  let ans = 0

  for (let [_, count] of Object.entries(mod200)) {
    if (count < 2) continue

    ans += count * (count-1) / 2
  }

  return ans
}
