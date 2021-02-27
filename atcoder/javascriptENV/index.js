const request = require('request')
const cheerio = require('cheerio')

const test = () => {
  request(url, (error, response, body) => {
    if (error) return console.log(error)

    const html = cheerio.load(body)
    const test_input = []
    const test_output = []

    html('.div-btn-copy + pre').each((i,e) => {
      console.log(e)
      i % 2 ? test_output.push(e.children[0]?.data) : test_input.push(e.children[0]?.data)
    })

    for (let [i, v] of test_input.entries()) {
      console.log(`------ Test case ${i + 1} ------`)

      console.time()
      console.log(main(v))
      console.log(`[32m${test_output[i]}[0m`)
      console.timeEnd()
      console.log('----------------------------')

      console.log()
      console.log()
    }
  })
}

// TODO: set url for test
const url = 'https://atcoder.jp/contests/abc191/tasks/abc191_b'

// ======================================================================================================
// ======================================================================================================


const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  const [n, x] = input.trim().split('\n')

  return n.split(' ').filter(v => v !== x).join(' ')
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : console.log(main(require('fs').readFileSync('dev/stdin', 'utf8'))))
  : console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))


// ======================================================================================================
// ======================================================================================================
