const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const ls = input[1].split(' ').map(Number)
  const rs = input[2].split(' ').map(Number)

  ls.sort((a, b) => b - a)
  rs.sort((a, b) => b - a)

  let ans = 0
  while (ls.length && rs.length) {
    if (ls[ls.length - 1] === rs[rs.length - 1]) {
      ans++
      ls.pop()
      rs.pop()

      continue
    }

    while (ls[ls.length - 1] !== rs[rs.length - 1]) {
      if (!ls.length || !rs.length) break

      if (ls[ls.length - 1] < rs[rs.length - 1]) ls.pop()
      else if (ls[ls.length - 1] > rs[rs.length - 1]) rs.pop()
    }
  }

  return ans
}
