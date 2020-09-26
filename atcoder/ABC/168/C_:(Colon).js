const main = (input) => {
  let [S, L, H, M] = input.trim().split(' ').map(Number)
  H = H % 12
  M = M % 60

  const l_angle = 360 * (M / 60)
  const s_angle = 360 * (H / 12) + (30 * (M / 60))

  if (Math.abs(s_angle - l_angle === 180)) return console.log(S + L)

  const dif = Math.abs(s_angle - l_angle)
  let angle = dif > 180 ? 360 - (dif) : dif
  angle = angle * Math.PI / 180

  return console.log(Math.sqrt((S**2) + (L**2) - (2 * S * L * Math.cos(angle))))
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
