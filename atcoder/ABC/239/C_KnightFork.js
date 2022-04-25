const main = (input) => {
  const [x1, y1, x2, y2] = input.trim().split(' ').map(Number)

  if (Math.sqrt((Math.abs(x1-x2) ** 2) + (Math.abs(y1-y2) ** 2)) > Math.sqrt(5) * 2 + 1)
    return 'No'

  for (let x=Math.min(x1, x2)-5; x<=Math.max(x1, x2)+5; x++) {
    for (let y=Math.min(y1, y2)-5; y<=Math.max(y1, y2)+5; y++) {
      if (Math.sqrt((Math.abs(x-x1) ** 2) + (Math.abs(y-y1) ** 2)) === Math.sqrt(5) &&
      Math.sqrt((Math.abs(x-x2) ** 2) + (Math.abs(y-y2) ** 2)) === Math.sqrt(5)) return 'Yes'
    }
  }

  return 'No'
}
