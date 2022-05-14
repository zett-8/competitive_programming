const main = (input) => {
  input = input.trim().split('\n')
  const [, W] = input[0].split(' ').map(Number)
  const Q = [0, 0, ...input[1].split(' ').map(Number).sort((a, b) => a - b)]

  let ans = new Set()

  for (let x=0; x<Q.length; x++) {
    for (let y=x+1; y<Q.length; y++) {
      for (let z=y+1; z<Q.length; z++) {
        if (Q[x] + Q[y] + Q[z] <= W) ans.add(Q[x] + Q[y] + Q[z])
        else break
      }
    }
  }

  return Array.from(ans).length
}
