const main = (input) => {
  input = input.trim().split('\n')

  let [, K] = input[0].split(' ').map(BigInt)
  const friends = input.slice(1).map(v => v.split(' ')).sort((a, b) => BigInt(b[0]) - BigInt(a[0]) > 0 ? 0 : -1)

  let ans = 0n

  while (K > 0n) {
    ans += K
    K = 0n

    while (friends.length && BigInt(friends[friends.length-1][0]) <= ans) {
      const [, b] = friends.pop()
      K += BigInt(b)
    }
  }

  return ans.toString()
}
