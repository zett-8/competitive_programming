const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const s = input[1]

  let group = -1
  let happiness = 0

  for (let pre='', i=0; i<n; i++) {
    if (s[i] === 'R' && s[i+1] && s[i+1] === 'R') happiness++
    else if (s[i] === 'L' && s[i-1] && s[i-1] === 'L') happiness++

    if (s[i] !== pre) {
      group++
      pre = s[i]
    }

    if (i === n-1) group++
  }

  for (let i=0; i<k; i++) {
    if (group <= 3) return n-1

    group -= 2
    happiness += 2
  }

  return happiness
}
