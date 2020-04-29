const fs = require('fs')

const temp = `const request = require('request')
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
      console.log(\`------ Test case \${i + 1} ------\`)

      console.time()
      main(v)
      console.log(\`\x1b[32m\${test_output[i]}\x1b[0m\`)
      console.timeEnd()
      console.log('----------------------------')

      console.log()
      console.log()
    }
  })
}

// TODO: set url for test
const url = 'https://atcoder.jp/contests/abc164/tasks/abc164_d'

// ======================================================================================================
// ======================================================================================================


const main = (input) => {
  const s = input.trim()
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// ======================================================================================================
// ======================================================================================================
`

fs.writeFile('index.js', temp, () => console.log('made'))