const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const ss = Array(n).fill('').map((_, i) => input[i+1])

  const x = Array(10).fill('').map(() => [])

  for (let t=0; t<=1000; t++) {
    number:
    for (let num=0; num<10; num++) {
      for (let s=0; s<n; s++) {
        const str = ss[s]

        if (str[t%10] === String(num) && !x[num].includes(s)) {
          x[num].push(s)
          if (x[num].length === n) return t
          continue number
        }
      }
    }
  }
}
