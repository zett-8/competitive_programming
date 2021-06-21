// rotate P(x, y) by 'angle' degrees with P(cx, cy) as its center

// const rotate = (cx, cy, x, y, angle) => {
//   const radians = (Math.PI / 180) * angle
//   const cos = Math.cos(radians)
//   const sin = Math.sin(radians)
//   const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx
//   const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy
//
//   return [nx, ny]
// }

// one line
const rotate=(cx,cy,x,y,angle)=>{const c=Math.PI/180*angle,h=Math.cos(c),r=Math.sin(c);return[h*(x-cx)+r*(y-cy)+cx,h*(y-cy)-r*(x-cx)+cy]};
