const main = (input) => {
  input = input.trim().split('\n')
  const A = input[1].split(' ').map(Number)

  const allCMB = []

  const r = (idx) => {
    if (idx >= A.length)
      return allCMB.push(A.slice())

    A.splice(idx, 0, '|')
    r(idx+2)
    A.splice(idx, 1)
    r(idx+1)
  }
  r(1)
  allCMB.push()

  let ans = Infinity

  allCMB.forEach(arr => {
    let XOR = 0

    for (let pre=0, i=0; i<arr.length; i++) {
      if (arr[i] === '|') {
        XOR = XOR ^ pre
        pre = 0
      }
      pre = pre | arr[i]
      if (i === arr.length-1) XOR = XOR ^ pre
    }

    ans = Math.min(ans, XOR)
  })

  return ans
}
