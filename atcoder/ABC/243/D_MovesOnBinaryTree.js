const even = (n) => {
  return n % 2n === 1n ? false : true
}

const main = (input) => {
  input = input.trim().split('\n')
  const [N, X] = input[0].split(' ')
  const S = input[1].split('')

  let ans = BigInt(X)

  for (let lastU=[],i=Number(N)-1; i>=0; i--) {
    if (S[i] === 'U') {
      lastU.push(i)
    } else {
      if (lastU.length) {
        const uIndex = lastU.pop()
        S[i] = '.'
        S[uIndex] = '.'
      }
    }
  }

  for (let i=0; i<Number(N); i++) {
    if (S[i] === 'U') {
      if (even(ans)) {
        ans = ans / 2n
      } else {
        ans = (ans-1n) / 2n
      }
    } else if (S[i] === 'R') {
      ans = ans * 2n + 1n
    } else if (S[i] === 'L') {
      ans = ans * 2n
    }
  }

  return `${ans}`
}
