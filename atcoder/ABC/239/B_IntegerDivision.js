const main = (input) => {
  const x = input.trim()

  if (-10 < Number(x) && Number(x) < 10) return Math.floor(Number(x) / 10)

  if (x[0] !== '-' || x[x.length-1] === '0')
    return x.slice(0, x.length-1)

  for (let ans=[], added=false, i=x.length-2; i>=0; i--) {
    if (i === 0)
      return `-${added ? '' : 1}${ans.reverse().join('')}`

    if (x[i] !== '9' && !added) {
      ans.push(String(Number(x[i]) + 1))
      added = true
    } else {
      ans.push(added ? x[i] : '0')
    }
  }
}

const main = (input) => {
  input = input.trim()
  const x = BigInt(input)

  return `${x < 0n ? input[input.length-1] === '0' ? x / 10n : x / 10n - 1n : x / 10n}`
}
