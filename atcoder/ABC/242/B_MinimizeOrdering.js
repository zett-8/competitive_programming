const main = (input) => {
  input = input.trim()

  return input.split('').sort((a, b) => a.localeCompare(b)).join('')
}
