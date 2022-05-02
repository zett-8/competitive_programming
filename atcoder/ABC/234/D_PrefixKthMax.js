const heaps=()=>{return new class{constructor(){this.n=[null],this.sum=0}add(t){this.n.push(t),this.sum+=t;let n=this.n.length-1;const s=this.n[n];for(;n>1;){const t=Math.floor(n/2),h=this.n[t];if(!(h<s))break;this.n[t]=s,this.n[n]=h,n=t}}remove(){if(!this.n[1])return null;let t=this.n[1];const n=this.n.pop();this.n.length>1&&(this.n[1]=n);let s=1,h=this.n[1],i=this.n.length;for(;;){const t=2*s,n=2*s+1;let l,e,r=null;if(t<i&&(l=this.n[t])>h&&(r=t),n<i&&(e=this.n[n],(null===r&&e>h||null!==r&&e>l)&&(r=n)),null===r)break;this.n[s]=this.n[r],this.n[r]=h,s=r}return this.sum-=t,t}}};
const main = (input) => {
  const hp = heaps()
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const q = input[1].split(' ').map(Number)

  const ans = []

  for (let i=0; i<k-1; i++) hp.add(q[i] * -1 )

  for(let i=k-1; i<q.length; i++) {
    if (i === k-1) {
      hp.add(q[i] * -1)
    } else if (q[i] > -1*hp.n[1]) {
      hp.remove()
      hp.add(q[i] * -1)
    }

    ans.push(hp.n[1] * -1)
  }

  return ans.join('\n')
}
