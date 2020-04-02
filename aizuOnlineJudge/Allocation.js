const solve = (n, k, w) => {

  let left = 0
  let right = Math.max(...w) * w.length

  while (right - left > 1) {
    const mid = Math.floor((right + left) / 2)

    const res = check(mid, n, k, w)

    if (n > res) {
      left = mid
    } else {
      right = mid
    }
  }

  console.log(right)
}

const check = (p, n, k, weights) => {
  const tracks = Array(k).fill(0)
  let i = 0

  tracks.forEach(t => {
    while (t + weights[i] <= p) {
      t += weights[i]
      i++

      if (i === weights.length) return weights.length
    }
  })

  return i
}





solve(5, 3, [8, 1, 7, 3, 9])

solve(4, 2, [1, 2, 2, 6])