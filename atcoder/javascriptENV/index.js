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
      main(v)
      console.log(`[32m${test_output[i]}[0m`)
      console.timeEnd()
      console.log('----------------------------')

      console.log()
      console.log()
    }
  })
}

// TODO: set url for test
const url = 'https://atcoder.jp/contests/dp/tasks/dp_b'

// ======================================================================================================
// ======================================================================================================


const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(Number)

  const dp = new Array(n).fill(Infinity)
  dp[0] = 0

  for (let i=1; i<n; i++)
    for (let x=1; x<=Math.min(i,k); x++)
      dp[i] = Math.min(dp[i], dp[i-x] + Math.abs(q[i] - q[i-x]))

  return console.log(dp[n-1])
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))



// ======================================================================================================
// ======================================================================================================
