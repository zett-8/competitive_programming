const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const canReach = (x1, y1, x2, y2) => {
  return (x1+y1 === x2+y2 || x1 - y1 === x2 - y2 || Math.abs(x1-x2) + Math.abs(y1-y2) <= 3)
}

const canReachToX = (x1, y1, x2, y2) => {
  const xDiff = x2 - x1
  const yDiff = y2 - y1

  const p1 = { x: x1+xDiff , y: y1+xDiff}
  const p2 = { x: x1+xDiff, y: y1-xDiff}
  const p3 = { x: x1-xDiff, y: y1+xDiff}
  const p4 = { x: x1-xDiff, y: y1-xDiff}

  const p5 = { x: x1+yDiff , y: y1+yDiff}
  const p6 = { x: x1+yDiff, y: y1-yDiff}
  const p7 = { x: x1-yDiff, y: y1+yDiff}
  const p8 = { x: x1-yDiff, y: y1-yDiff}

  return (
    (x1+y1) % 2 === (x2+y2) % 2 ||
    canReach(p1.x, p1.y, x2, y2) ||
    canReach(p2.x, p2.y, x2, y2) ||
    canReach(p3.x, p3.y, x2, y2) ||
    canReach(p4.x, p4.y, x2, y2) ||
    canReach(p5.x, p5.y, x2, y2) ||
    canReach(p6.x, p6.y, x2, y2) ||
    canReach(p7.x, p7.y, x2, y2) ||
    canReach(p8.x, p8.y, x2, y2))
}

const main = (input) => {
  input = input.trim().split('\n')
  const [x1, y1] = input[0].split(' ').map(Number)
  const [x2, y2] = input[1].split(' ').map(Number)

  if (x1 === x2 && y1 === y2) return 0

  if (canReach(x1, y1, x2, y2)) return 1

  if (canReachToX(x1, y1, x2, y2)) return 2

  return 3
}
