const main = (input) => {
  input = input.trim().split('\n')
  const k = Number(input[0])
  const s_hand = input[1].split('').slice(0, 4).map(Number)
  const t_hand = input[2].split('').slice(0, 4).map(Number)

  const deck = {}
  const restOfDeck = 9 * k - 8

  ;[1,2,3,4,5,6,7,8,9].forEach(n => deck[n] = k)
  s_hand.concat(t_hand).forEach(n => deck[n] -= 1)

  const score = (arr) => {
    const rep = {}

    arr.forEach(n => { rep[n] = ~~rep[n] + 1 })

    let ans = 0

    for (let i=1; i<=9; i++) {
      ans += i * (10 ** ~~rep[i])
    }

    return ans
  }

  let ans = 0

  for (let s=1; s<=9; s++) {
    if (deck[s] === 0) continue
    deck[s] -= 1

    for (let t=1; t<=9; t++) {
      if (deck[t] === 0) continue

      if (score(s_hand.concat(s)) > score(t_hand.concat(t))) {
        ans += ((deck[s]+1)/restOfDeck) * ((deck[t])/(restOfDeck-1))
      }
    }

    deck[s] += 1
  }

  return ans
}
