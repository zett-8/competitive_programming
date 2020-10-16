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

const main = (input) => {
  input = input.trim().split('\n')
  const [n, m, k] = input[0].split(' ').map(Number)
  const mq = input.slice(1, 1+m)
  const kq = input.slice(1+m)

  const uf = new UnionFind(n)

  const friends = {}
  const bans = {}

  for (let i=0; i<m; i++) {
    const [a, b] = mq[i].split(' ').map(Number)
    uf.unite(a-1, b-1)
    if (friends[a-1]) friends[a-1].push(b-1)
    else friends[a-1] = [b-1]

    if (friends[b-1]) friends[b-1].push(a-1)
    else friends[b-1] = [a-1]
  }

  for (let i=0; i<k; i++) {
    const [a, b] = kq[i].split(' ').map(Number)
    if (uf.findSet(a-1) === uf.findSet(b-1)) {
      if (bans[a-1]) bans[a-1].push(b-1)
      else bans[a-1] = [b-1]

      if (bans[b-1]) bans[b-1].push(a-1)
      else bans[b-1] = [a-1]
    }
  }

  const ans = []
  for (let i=0; i<n; i++) {
    const ufSize = uf.size[uf.findSet(i)]
    const directFriends = friends[i] || []
    const bansList = bans[i] || []

    ans.push(ufSize - 1 - directFriends.length - bansList.length)
  }

  console.log(ans.join(' '))
}
