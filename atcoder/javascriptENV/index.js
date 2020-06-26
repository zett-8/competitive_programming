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
const url = 'https://atcoder.jp/contests/abc167/tasks/abc167_c'

// ======================================================================================================
// ======================================================================================================


const main = (input) => {
  const [a, ...b] = input.trim().split('\n')
  const [, M, X] = a.split(' ').map(v => parseInt(v, 10))
  const q = b.map(v => v.split(' ').map(x => parseInt(x, 10)))

  let ans = Infinity

  const r = (bought, books) => {
    if (!books.length) {
      let sum = 0
      const arr = new Array(M).fill(0)

      for (let b of bought) {
        sum += b[0]
        for (let i=1; i<=M; i++) arr[i-1] += b[i]
      }

      if (Math.min(...arr) >= X) ans = Math.min(ans, sum)
      return null
    }

    const [first, ...rest] = books
    r(bought, rest)
    r([...bought, first], rest)
  }

  r([], q)

  return console.log(ans === Infinity ? -1 : ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// ======================================================================================================
// ======================================================================================================
