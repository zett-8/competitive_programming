class UnionFind {
  constructor(n) {
    this.p = new Array(n).fill(-1)
    this.height = new Array(n).fill(0)
    this.size = new Array(n).fill(1)
  }

  unite(a, b) {
    this.link(this.findSet(a), this.findSet(b))
  }

  link(a, b) {
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
    if (this.p[x] === -1) return x
    return this.findSet(this.p[x])
  }
}


// ============ test ================


const uf = new UnionFind(7)

console.log(uf.findSet(3))
console.log(uf.findSet(2))

uf.unite(1, 3)
uf.unite(2, 3)

console.log(uf.findSet(2))
console.log(uf.findSet(3))
console.log(uf.findSet(1))

uf.unite(1, 4)

console.log(uf.findSet(1))


uf.unite(5, 6)
uf.unite(5, 1)

console.log(uf.size)

