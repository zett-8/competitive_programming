const request = require('request')
const cheerio = require('cheerio')

const test = () => {
  const test_input = [
    // 1
    `3 2 4
`,
    // 2
    `-7 7 2
`,
    // 3
    `-8 6 3
`,
    // 4
    ``,
    // 5
    ``,
  ]
  const test_output = [
    // 1
    `>`,
    // 2
    `=`,
    // 3
    `<`,
    // 4
    ``,
    // 5
    ``,
  ]

  for (let [i, v] of test_input.entries()) {
    if (!v) return

    console.log(`------ Test case ${i + 1} ------`)

    console.time()
    console.log(main(v))
    console.log(`[32m${test_output[i]}[0m`)
    console.timeEnd()
    console.log('----------------------------')

    console.log()
    console.log()
  }
}


// ======================================================================================================
// ======================================================================================================


const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  let [a, b, c] = input.trim().split(' ').map(Number)

  if (c === 0) return '='

  if (a < 0 && c % 2 === 0) a *= -1
  if (b < 0 && c % 2 === 0) b *= -1

  if (a === b) return '='
  return a > b ? '>' : '<'
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : console.log(main(require('fs').readFileSync('dev/stdin', 'utf8'))))
  : console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))


// ======================================================================================================
// ======================================================================================================
