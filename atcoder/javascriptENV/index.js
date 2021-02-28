const request = require('request')
const cheerio = require('cheerio')

const test = () => {
  const test_input = [
    // 1
    `5 5
3 5 6 5 4
`,
    // 2
    `3 3
3 3 3
`,
    // 3
    ``,
    // 4
    ``,
    // 5
    ``,
  ]
  const test_output = [
    // 1
    `3 6 4
`,
    // 2
    `
    `,
    // 3
    ``,
    // 4
    ``,
    // 5
    ``,
  ]

  for (let [i, v] of test_input.entries()) {
    if (!v) return null

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

// TODO: set url for test
const url = ''

// ======================================================================================================
// ======================================================================================================


const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const [, x] = input[0].split(' ')
  const arr = input[1].split(' ')

  return arr.filter(v => v !== x).join(' ')
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : console.log(main(require('fs').readFileSync('dev/stdin', 'utf8'))))
  : console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))


// ======================================================================================================
// ======================================================================================================
