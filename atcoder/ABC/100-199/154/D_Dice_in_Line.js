const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(Number)

  let max = -Infinity
  let maxArr

  for (let sum=q.slice(0, k).reduce((a, b) => a+b, 0), s=0, e=k; e<=n; s++, e++) {
    if (max < sum) maxArr = q.slice(s, e)
    max = Math.max(sum, max)

    sum -= q[s]
    sum += q[e]
  }

  let ans = 0

  for (let i=0; i<maxArr.length; i++) {
    const n = maxArr[i]
    const sum = (n+1) * n / 2
    ans += sum/n
  }

  return console.log(ans)
}
