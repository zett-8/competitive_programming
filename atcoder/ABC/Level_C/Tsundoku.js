const main = (input) => {
  input = input.trim().split('\n')
  const [, , K] = input[0].split(' ').map(BigInt)
  const booksA = input[1].split(' ').map(BigInt)
  const booksB = input[2].split(' ').map(BigInt)

  let currentSum = 0n
  const B_list = []
  for (let i = 0; i < booksB.length; i++) {
    currentSum += booksB[i]
    B_list.push(booksB[i])

    if (currentSum > K) {
      currentSum -= B_list.pop()
      break
    }
  }

  let ans = B_list.length

  let A_sum = 0n
  const A_list = []
  for (let i = 0; i < booksA.length; i++) {
    A_sum += booksA[i]
    A_list.push(booksA[i])

    while (A_sum + currentSum > K && B_list.length) currentSum -= B_list.pop()
    if (A_sum + currentSum > K) break

    ans = Math.max(ans, A_list.length + B_list.length)
  }

  return console.log(ans)
}


process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
