const rotate=(cx,cy,x,y,angle)=>{const c=Math.PI/180*angle,h=Math.cos(c),r=Math.sin(c);return[h*(x-cx)+r*(y-cy)+cx,h*(y-cy)-r*(x-cx)+cy]};

const main = (input) => {
  input = input.trim().split('\n')
  const N = Number(input[0])
  const [x0, y0] = input[1].split(' ').map(Number)
  const [xn, yn] = input[2].split(' ').map(Number)

  const cx = (xn - x0) / 2 + x0
  const cy = (yn - y0) / 2 + y0
  const angle = 360 / N

  return rotate(cx, cy, x0, y0, -angle).join(' ')
}
