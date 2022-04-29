const main = (input) => {
  input = input.trim().split('\n')
  let [, k] = input[0].split(' ').map(BigInt)
  const cities = input[1].split(' ').map(v => parseInt(v, 10) - 1)

  let size
  let loop_size
  let before_loop

  for (let arr=[0], his={ 0:1 }, i=0; true;) {
    if (~~his[cities[i]]) {
      before_loop = arr.indexOf(cities[i])
      size = arr.length
      loop_size = size - before_loop
      break
    }

    arr.push(cities[i])
    his[cities[i]] = 1
    i = cities[i]
  }

  let pre_move = 0
  let move = k

  if (size < k) {
    pre_move = before_loop
    k -= BigInt(before_loop)
    move = k % BigInt(loop_size)
  }

  let ans = 0
  for (let i=0; i<pre_move; i++) ans = cities[ans]
  for (let i=0n; i<move; i++) ans = cities[ans]

  return console.log(ans + 1)
}
