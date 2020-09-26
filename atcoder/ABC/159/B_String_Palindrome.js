const main = (input) => {
  const s = input.trim()

  const palindrome = (text) => {
    const re = Array.from(text).reverse()
    return re.every((v, i) => v === text[i])
  }

  return console.log(palindrome(s) && palindrome(s.slice(0, Math.floor(s.length/2))) ? 'Yes' : 'No')
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
