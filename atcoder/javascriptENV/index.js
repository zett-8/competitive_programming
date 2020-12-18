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
const url = 'https://atcoder.jp/contests/abc143/tasks/abc143_d'

// ======================================================================================================
// ======================================================================================================


const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const bisect_left = (arr, value) => {
  for (let s=0, e=arr.length-1; true;) {
    if (s === e) return arr[s] < value ? s+1 : s

    let mid = s + Math.floor((e-s)/2)

    if (arr[mid] === value) {
      while (arr[mid] === value) mid--
      return mid+1
    }
    else if (arr[mid] > value) {
      e = mid-1
      if (s > e) return mid
    }
    else if (arr[mid] < value) s = mid+1
  }
}

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number).sort((a, b) => a - b)

  let ans = 0

  for (let a=0; a<n-2; a++) {
    for (let b=a+1; b<n-1; b++) {
      ans += bisect_left(q, q[a] + q[b]) - (b+1)
    }
  }

  return ans
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : console.log(main(require('fs').readFileSync('dev/stdin', 'utf8'))))
  : console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))


// ======================================================================================================
// ======================================================================================================
