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
const url = 'https://atcoder.jp/contests/abc141/tasks/abc141_d'

// ======================================================================================================
// ======================================================================================================


const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const heaps=()=>{return new class{constructor(){this.n=[null],this.sum=0}add(t){this.n.push(t),this.sum+=t;let n=this.n.length-1;const s=this.n[n];for(;n>1;){const t=Math.floor(n/2),h=this.n[t];if(!(h<s))break;this.n[t]=s,this.n[n]=h,n=t}}remove(){if(!this.n[1])return null;let t=this.n[1];const n=this.n.pop();this.n.length>1&&(this.n[1]=n);let s=1,h=this.n[1],i=this.n.length;for(;;){const t=2*s,n=2*s+1;let l,e,r=null;if(t<i&&(l=this.n[t])>h&&(r=t),n<i&&(e=this.n[n],(null===r&&e>h||null!==r&&e>l)&&(r=n)),null===r)break;this.n[s]=this.n[r],this.n[r]=h,s=r}return this.sum-=t,t}}};

const main = (input) => {
  input = input.trim().split('\n')
  const [n, m] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(Number).sort((a, b) => a - b)

  const hp = heaps()

  for (let i=0; i<n; i++) hp.add(q[i])

  for (let i=0; i<m; i++) {
    const val = hp.remove()
    hp.add(Math.floor(val/2))
  }

  return hp.sum
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : console.log(main(require('fs').readFileSync('dev/stdin', 'utf8'))))
  : console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))


// ======================================================================================================
// ======================================================================================================
