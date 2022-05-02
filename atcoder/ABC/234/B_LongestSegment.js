const main = (input) => {
  input = input.trim().split('\n')

  let ans = 0

  for (let a=1; a<input.length-1; a++) {
    for (let b=a+1; b<input.length; b++) {
      const [ax, ay] = input[a].split(' ').map(Number)
      const [bx, by] = input[b].split(' ').map(Number)
      ans = Math.max(Math.sqrt((Math.abs(ax-bx)**2) + (Math.abs(ay-by)**2)), ans)
    }
  }

  return ans
}
