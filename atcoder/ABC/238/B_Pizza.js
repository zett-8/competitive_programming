const main = (input) => {
  input = input.trim().split('\n')

  const q = input[1].split(' ')
  const a = [360]

  for (let i=0; i<q.length; i++) {
    let angle = parseInt(q[i], 10)
    let tmp = a.pop()

    while (angle > tmp) {
      a.unshift(tmp)
      angle -= tmp
      tmp = a.pop()
    }

    a.unshift(angle)
    a.push(tmp - angle)
  }

  return a.sort((a, b) => b - a)[0]
}
