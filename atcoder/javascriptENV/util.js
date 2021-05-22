const fs = require('fs')

const temp = `const request = require('request')
const cheerio = require('cheerio')

const test = () => {
  const test_input = [
    // 1
    \`\`,
    // 2
    \`\`,
    // 3
    \`\`,
    // 4
    \`\`,
    // 5
    \`\`,
  ]
  const test_output = [
    // 1
    \`\`,
    // 2
    \`\`,
    // 3
    \`\`,
    // 4
    \`\`,
    // 5
    \`\`,
  ]
  
  for (let [i, v] of test_input.entries()) {
    if (!v) return
  
    console.log(\`------ Test case \${i + 1} ------\`)

    console.time()
    console.log(main(v))
    console.log(\`\x1b[32m\${test_output[i]}\x1b[0m\`)
    console.timeEnd()
    console.log('----------------------------')

    console.log()
    console.log()
  }
}


// ======================================================================================================
// ======================================================================================================


const mod = 10**9 + 7
const mlog = (v) => \`\${(v % mod + mod) % mod}\`

const main = (input) => {
  input = input.trim()
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : console.log(main(require('fs').readFileSync('dev/stdin', 'utf8'))))
  : console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))


// ======================================================================================================
// ======================================================================================================
`

fs.writeFile('index.js', temp, () => console.log('made'))
