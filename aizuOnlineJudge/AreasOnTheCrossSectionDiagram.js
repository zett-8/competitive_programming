const a = '\\'+ '\\' + '///' + '\\'+ '_/' + '\\' + '/' + '\\' +'\\' +'\\' +'\\' + '/_/' + '\\' +'\\' + '///__' + '\\' +'\\' +'\\' + '_' + '\\' +'\\' + '/_' + '\\' + '/_/' + '\\'

const arr = Array.from(a)

const stack1 = []
const stack2 = []

for (let i = 0; i < arr.length; i++) {
  switch(arr[i]) {
    case '\\':
      stack1.push(i)
      break

    case '/':
      const left = stack1.pop()
      if (left === undefined) break
      stack2.push([left, i - left])

      let lastTwo = stack2.slice(-2)
      while (lastTwo.length === 2 && lastTwo[0][0] > lastTwo[1][0]) {
        const a = stack2.pop()
        const b = stack2.pop()
        b[0] = a[0]
        b[1] += a[1]
        stack2.push(b)
        lastTwo = stack2.slice(-2)
      }
      break

    default:
      break
  }
}

console.log(stack2.reduce((a, b) => a + b[1], 0))
console.log([stack2.length].concat(stack2.map(v => v[1])).join(' '))