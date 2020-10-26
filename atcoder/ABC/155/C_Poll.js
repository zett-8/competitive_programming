const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const [, ...q] = input

  const his = {}
  let max = 0
  let ans = []

  for (let i=0; i<n; i++) {
    his[q[i]] = ~~his[q[i]] + 1

    if (his[q[i]] > max) {
      max = his[q[i]]
      ans = [q[i]]
    }
    else if (his[q[i]] === max) ans.push(q[i])
  }

  ans.sort((a, b) => a.localeCompare(b)).forEach(v => console.log(v))
}
