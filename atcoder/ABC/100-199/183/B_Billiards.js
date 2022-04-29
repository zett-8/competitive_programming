const mod = 10**9 + 7
const mlog = (v) => { console.log((v%mod+mod) % mod) }

const main = (input) => {
  const [sx, sy, gx, gy] = input.trim().split(' ').map(Number)
  return (sy*gx + sx*gy) / (sy + gy)
}
