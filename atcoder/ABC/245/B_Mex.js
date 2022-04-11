const main = (input) => {
  input = input.trim().split('\n')

  const n = Array.from(new Set(input[1].split(' ').map(Number))).sort((a, b) => b - a)

  if (n[n.length-1] > 0) return 0

  for (let i=1; true; i++) {
    if (!n.includes(i)) return i
  }
}

const main = (input) => {
  input = input.trim().split('\n')

  const n = Array.from(new Set(input[1].split(' ').map(Number))).sort((a, b) => a - b)

  if (n[0] > 0) return 0

  for (let i=0; i<n.length-1; i++) {
    if (n[i+1] - n[i] > 1) return n[i]+1
  }

  return n[n.length-1] + 1
}
