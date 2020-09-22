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
const url = 'https://atcoder.jp/contests/abc179/tasks/abc179_e'

// ======================================================================================================
// ======================================================================================================


const main = (input) => {
  let [n, x, m] = input.trim().split(' ')
  n = BigInt(n)
  x = Number(x)
  m = Number(m)

  const his = [x]
  let pre = x

  let beforeLoop_sum
  let size
  let loopSum
  let loopSize

  while (true) {
    pre = pre**2 % m

    const idx = his.indexOf(pre)
    if (idx !== -1) {
      size = his.length
      beforeLoop_sum = his.slice(0, idx).reduce((a, b) => a+b, 0)

      const l = his.slice(idx)
      loopSize = l.length
      loopSum = l.reduce((a, b) => a+b, 0)

      break
    }

    his.push(pre)
  }

  if (n > size) {

  } else {
    return console.log(his.slice(0, n+1).reduce((a, b) => a+b, 0))
  }



}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// ======================================================================================================
// ======================================================================================================
