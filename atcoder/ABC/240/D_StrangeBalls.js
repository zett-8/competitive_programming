const main = (input) => {
  input = input.trim().split('\n')
  const n = parseInt(input[0])
  const arr = input[1].split(' ').map(Number)

  const stack = []
  const tail = () => stack[stack.length-1]
  const ans = []
  let count = 0

  for (let i=0; i<n; i++) {
    if (tail() && tail()[0] === arr[i]) tail()[1]++
    else stack.push([arr[i], 1])

    count++

    if (tail()[0] <= tail()[1])
      count -= stack.pop()[1]

    ans.push(count)
  }

  return ans.join('\n')
}
