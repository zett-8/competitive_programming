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

// one line
// class UnionFind { constructor(n) { this.p = new Array(n).fill(null).map((_, i) => i); this.height = new Array(n).fill(0); this.size = new Array(n).fill(1) } unite(a, b) { this.link(this.findSet(a), this.findSet(b)) } link(a, b) { if (a === b) return null; if (this.height[a] > this.height[b]) { this.p[b] = a; this.size[a] += this.size[b] } else { this.p[a] = b; this.size[b] += this.size[a]; if (this.height[a] === this.height[b]) this.height[b]++ }} findSet(x) { if (this.p[x] === x) return x ;return this.findSet(this.p[x]) }}
// class UnionFind{constructor(i){this.p=new Array(i).fill(null).map((i,t)=>t),this.height=new Array(i).fill(0),this.size=new Array(i).fill(1)}unite(i,t){this.link(this.findSet(i),this.findSet(t))}link(i,t){if(i===t)return null;this.height[i]>this.height[t]?(this.p[t]=i,this.size[i]+=this.size[t]):(this.p[i]=t,this.size[t]+=this.size[i],this.height[i]===this.height[t]&&this.height[t]++)}findSet(i){return this.p[i]===i?i:this.findSet(this.p[i])}}
