const main = (input) => {
  input = input.trim().split('\n')

  const [n, x] = input[0].split(' ').map(BigInt)
  const queue = []

  for (let i=0; i<n; i++)
    queue[i] = input[i+1].split(' ').slice(1).map(BigInt)

  let ans = 0n

  for (let arr=[1n], i=0n; i<n; i++) {
    if (!arr.length) break

    const newArr = []

    for (let a of arr) {
      for (let b of queue[i]) {
        if (a * b === x && i === n-1n) ans++
        else if (a * b <= x) newArr.push(a * b)
      }
    }

    arr = newArr
  }

  return ans.toString()
}
