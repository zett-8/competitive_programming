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
const url = 'https://atcoder.jp/contests/abc156/tasks/abc156_d'

// ======================================================================================================
// ======================================================================================================


console.__proto__.mod = function(v, mod) { console.log((v%mod+mod) % mod) }
const mod = 10**9 + 7
const modPow = (n, p, mod) => { [n, p, mod] = [n, p, mod].map(BigInt); if (p === 0n) return 1; if (p === 1n) return Number(n); if (p % 2n === 1n) { return Number(BigInt(modPow(n, (p-1n)/2n, mod)) ** 2n * n % mod) } else { return Number(BigInt(modPow(n, p/2n, mod)) ** 2n % mod) }}

const main = (input) => {
  const [n, a, b] = input.trim().split(' ').map(Number)

  const ans = modPow(2, n, mod) - 1

  
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// ======================================================================================================
// ======================================================================================================
