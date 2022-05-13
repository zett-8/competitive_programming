const main = (input) => {
  class UnionFind{constructor(i){this.p=new Array(i).fill(null).map((i,t)=>t),this.height=new Array(i).fill(0),this.size=new Array(i).fill(1)}unite(i,t){this.link(this.findSet(i),this.findSet(t))}link(i,t){if(i===t)return null;this.height[i]>this.height[t]?(this.p[t]=i,this.size[i]+=this.size[t]):(this.p[i]=t,this.size[t]+=this.size[i],this.height[i]===this.height[t]&&this.height[t]++)}findSet(i){return this.p[i]===i?i:this.findSet(this.p[i])}}

  input = input.trim().split('\n')
  const [N, M] = input[0].split(' ').map(Number)
  const uf = new UnionFind(N+1)
  const ans = new Array(N+1).fill('').map(() => [])

  for (let i=0; i<M; i++) {
    const [a, b] = input[i+1].split(' ').map(Number)

    if (uf.findSet(a) === uf.findSet(b) || ans[a].length === 2 || ans[b].length === 2) return 'No'

    uf.unite(a, b)
    ans[a].push(b)
    ans[b].push(a)
  }

  return 'Yes'
}
