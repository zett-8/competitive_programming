const main = (input) => {
  const lb = (t,o)=>{let l=0,n=t.length;for(;l<n;){const r=Math.floor((l+n)/2);t[r]<o?l=r+1:n=r}return l};

  input = input.trim().split('\n')
  const [, Q] = input[0].split(' ').map(Number)
  const A = input[1].split(' ').map(Number).sort((a, b) => a - b)
  const ans = []

  for (let i=0; i<Q; i++)
    ans.push(A.length - lb(A, Number(input[i+2])))

  return ans.join('\n')
}
