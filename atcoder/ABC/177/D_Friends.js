class UnionFind {
  constructor(n) {
    this.p = new Array(n).fill(null).map((_, i) => i)
    this.height = new Array(n).fill(0)
    this.size = new Array(n).fill(1)
  }

  unite(a, b) {
    this.link(this.findSet(a), this.findSet(b))
  }

  link(a, b) {
    if (a === b) return null

    if (this.height[a] > this.height[b]) {
      this.p[b] = a
      this.size[a] += this.size[b]
    } else {
      this.p[a] = b
      this.size[b] += this.size[a]

      if (this.height[a] === this.height[b]) {
        this.height[b]++
      }
    }
  }

  findSet(x) {
    if (this.p[x] === x) return x
    return this.findSet(this.p[x])
  }
}

const main = (input) => {
  input = input.trim().split('\n')
  const [n,] = input.shift().split(' ').map(Number)
  input = Array.from(new Set(input))

  const uf = new UnionFind(n+1)

  for (let i=0; i<input.length; i++) uf.unite(...input[i].split(' ').map(Number))

  return console.log(uf.size.reduce((a, b) => Math.max(a, (b || 0)), 0))
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
