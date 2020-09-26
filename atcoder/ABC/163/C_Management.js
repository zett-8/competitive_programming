const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const arr = input[1].split(' ').map(Number)

  const ans = new Array(n).fill(0)

  for (let i=0; i<arr.length; i++) {
    ans[arr[i]-1]++
  }

  for (let i=0; i<ans.length; i++) {
    console.log(ans[i])
  }
}
