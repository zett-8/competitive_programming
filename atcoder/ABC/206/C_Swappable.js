const main = (input) => {
  input = input.trim().split('\n')
  const N = Number(input[0])
  const arr = input[1].split(' ').map(Number)
  const count = Array.from({ length: N })

  let ans = 0
  const his = {}

  for (let i=N-1; i>=0; i--) {
    count[i] = ~~his[arr[i]]
    his[arr[i]] = ~~his[arr[i]]+1
  }

  for (let i=0; i<N; i++)
    ans += (N - (i+1) - count[i])

  return ans
}
