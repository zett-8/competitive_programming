const request = require('request')
const cheerio = require('cheerio')

const test = () => {
  request(url, (error, response, body) => {
    if (error) return console.log(error)

    const html = cheerio.load(body)
    const test_input = []
    const test_output = []

    html('#task-statement >span >span:first-child >div.part pre').each((i,e) => {
      i % 2 ? test_output.push(e.children[0].data) : test_input.push(e.children[0].data)
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
const url = 'https://atcoder.jp/contests/arc001/tasks/arc001_1'

// ======================================================================================================
// ======================================================================================================


const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const a = input[1]

  const his = {}
  for (let i=0; i<n; i++) his[a[i]] = ~~his[a[i]] + 1

  let min = [Infinity, null]
  let max = [-Infinity, null]

  Object.keys(v => {
    if (his[v] < min[0]) min = [his[v], v]
    if (his[v] > max[0]) max = [his[v], v]
  })
console.log(min)
  return [max[1], min[1]].join(' ')
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : console.log(main(require('fs').readFileSync('dev/stdin', 'utf8'))))
  : console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))


// ======================================================================================================
// ======================================================================================================
