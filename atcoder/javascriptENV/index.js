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
const url = 'https://atcoder.jp/contests/abc168/tasks/abc168_d'

// ======================================================================================================
// ======================================================================================================


const main = (input) => {
  const [a, ...qs] = input.trim().split('\n')
  const [N,] = a.split(' ').map(Number)
  const q = qs.map(v => v.split(' ').map(Number))
  const cave = new Array(N+1).fill().map(() => [])

  for (let [a, b] of q) {
    cave[a].push(b)
    cave[b].push(a)
  }

  const visited = { '1': true }
  const ans = ['Yes', ...new Array(N).fill(0)]
  let queue = [1]

  while (queue.length) {
    const nextQ = []
    while (queue.length) {
      const v = queue.shift()
      const links = cave[v]

      for (let l of links) {
        if (visited[l]) continue
        nextQ.push(l)
        ans[l] = v
        visited[l] = true
      }
    }

    queue = nextQ
  }

  for (let i=0; i<=N; i === 0 ? i+=2 : i++) console.log(ans[i])
  return null
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// ======================================================================================================
// ======================================================================================================
