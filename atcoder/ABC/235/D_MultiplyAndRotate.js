const main = (input) => {
  const [a, N] = input.trim().split(' ').map(Number)

  let arr = [N]
  let count = 0
  const his = {}

  while (arr.length) {
    const tmp = new Set()
    count++

    for (let i=0; i<arr.length; i++) {
      const num = arr[i]
      const s_num = String(num)

      his[num] = true

      const div = num % a === 0 ? num / a : null
      const rpl = s_num[1] !== '0' ? Number(s_num.slice(1) + s_num[0]) : null

      if (div === 1 || rpl === 1) return count

      if (div && div > 0) tmp.add(div)
      if (rpl && rpl > 0 && !his[rpl]) tmp.add(rpl)
    }

    arr = Array.from(tmp)
  }

  return -1
}
