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

      if (this.height[a] === this.height[b]) this.height[b]++
    }
  }

  findSet(x) {
    if (this.p[x] === x) return x
    return this.findSet(this.p[x])
  }
}

// ============ test ================


const uf = new UnionFind(6)


uf.unite(1, 2)
uf.unite(3, 4)
uf.unite(5, 1)
console.log(uf.size)

