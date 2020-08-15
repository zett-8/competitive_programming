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
const url = 'https://atcoder.jp/contests/abc175/tasks/abc175_b'

// ======================================================================================================
// ======================================================================================================


const main = (input) => {
  input = input.trim().split('\n')
  const n = parseInt(input[0], 10)
  const logs = input[1].split(' ').map(Number).sort((a, b) => a - b)

  let ans = 0

  const r = (idx, arr) => {
    if (arr.length === 3) {
      if (arr.length !== Array.from(new Set(arr)).length) return null
      if (arr[2] >= arr[0] + arr[1]) return null

      ans++
      return null
    }

    if (idx > logs.length-1) return null

    r(idx+1, arr)
    r(idx+1, [...arr, logs[idx]])
  }
  r(0, [])

  return console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// ======================================================================================================
// ======================================================================================================
