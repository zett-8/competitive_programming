const getMaxValue = (boxes, merchandise) => {
  const m = merchandise.slice().sort((a, b) => b[1] - a[1])

  const b = Array.from({ length: boxes.length }).fill(0)

  for (let i=0, min=Infinity, minIdx=-1; i<m.length; i++) {
    const [w, v] = m[i]
    min=Infinity
    minIdx = -1

    boxes.forEach((capa, _i) => {
      if (capa >= w && capa < min && b[_i] === 0) {
        min = capa
        minIdx = _i
      }
    })

    if (b[minIdx] === 0 ) b[minIdx] = v
  }

  return b.reduce((a, b) => a+b, 0)
}

const main = (input) => {
  input = input.trim().split('\n')

  const [n, m, q] = input.shift().split(' ').map(Number)

  // merchandise
  const merchandise = []
  for (let i=0; i<n; i++) {
    merchandise.push(input.shift().split(' ').map(Number))

  }

  // boxes
  const boxes = input.shift().split(' ').map(Number)

  // queries
  const queries = []
  for (let i=0; i<q; i++) {
    queries.push(input.shift().split(' ').map(Number))
  }

  const ans = []
  queries.forEach(([l, r]) => {
    const availableBoxes = [...boxes.slice(0, l-1), ...boxes.slice(r)]

    ans.push(getMaxValue(availableBoxes, merchandise))
  })

  return ans.join('\n')
}
