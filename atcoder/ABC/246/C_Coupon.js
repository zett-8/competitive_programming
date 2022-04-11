const main = (input) => {
  input = input.trim().split('\n')
  const [N, K, X] = input[0].split(' ').map(Number)
  const _items = input[1].split(' ')
  const items = []
  let tickets = K

  for (let i=0; i<N; i++) {
    items[i] = parseInt(_items[i], 10)

    if (items[i] <= X || tickets <= 0) continue

    let tn = Math.min(Math.floor(items[i] / X), tickets)

    tickets -= tn
    items[i] = items[i] - (tn * X)
  }

  if (tickets === 0) return `${items.reduce((a, b) => BigInt(a) + BigInt(b), 0n)}`

  const r_items = items.sort((a, b) => b - a)

  return `${r_items.slice(tickets).reduce((a, b) => BigInt(a) + BigInt(b), 0n)}`
}
