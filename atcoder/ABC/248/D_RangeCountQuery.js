const lb = (e,l)=>{let t=0,o=e.length;for(;t<o;){let r=Math.floor((t+o)/2);e[r]<l?t=r+1:o=r}return t};
const ub = (t,e)=>{let o=0,r=t.length;for(;o<r;){const l=Math.floor((o+r)/2);t[l]<=e?o=l+1:r=l}return o};

const main = (input) => {
  input = input.trim().split('\n')
  const N = Number(input[0])
  const Qn = Number(input[2])
  const arr = input[1].split(' ').map(Number)

  const ans = []
  const h = []

  for (let i=0; i<N; i++) {
    const n = arr[i]

    if (h[n]) h[n].push(i+1)
    else h[n] = [i+1]
  }

  for (let i=0; i<Qn; i++) {
    const [l, r, x] = input[i+3].split(' ').map(Number)

    if (!h[x]) ans.push(0)
    else {
      const uu = ub(h[x], r)
      const ll = lb(h[x], l)
      ans.push(uu - ll)
    }
  }

  return ans.join('\n')
}
