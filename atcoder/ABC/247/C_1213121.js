const main = (input) => {
  const rc = (i) => i === 1 ? '1' : `${rc(i-1)} ${i} ${rc(i-1)}`
  return rc(Number(input.trim()))
}
