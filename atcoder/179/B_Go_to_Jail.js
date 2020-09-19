const main = (input) => {
  const [, ...arr] = input.trim().split('\n')
  let count = 0

  for (let i=0; i<arr.length; i++) {
    const [a, b] = arr[i].split(' ').map(Number)

    if (a !== b) count = 0

    if (a === b) {
      count++
      if (count === 3) return console.log('Yes')
    }
  }
  return console.log('No')
}
