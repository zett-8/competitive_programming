const main = (input) => {
  const e = ['008', 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248, 256, 264, 272, 280, 288, 296, 304, 312, 320, 328, 336, 344, 352, 360, 368, 376, 384, 392, 400, 408, 416, 424, 432, 440, 448, 456, 464, 472, 480, 488, 496, 504, 512, 520, 528, 536, 544, 552, 560, 568, 576, 584, 592, 600, 608, 616, 624, 632, 640, 648, 656, 664, 672, 680, 688, 696, 704, 712, 720, 728, 736, 744, 752, 760, 768, 776, 784, 792, 800, 808, 816, 824, 832, 840, 848, 856, 864, 872, 880, 888, 896, 904, 912, 920, 928, 936, 944, 952, 960, 968, 976, 984, 992]
  const s = input.trim()

  if (s.length === 1) return console.log(Number(s) % 8 ? 'No' : 'Yes')
  if (s.length === 2) {
    if (Number(s) % 8 === 0 || Number(s[1]+s[0]) % 8 === 0) return console.log('Yes')
    else return console.log('No')
  }
  if (s.length <= 3) {
    if (
      Number(s) % 8 === 0 ||
      Number(s[0]+s[2]+s[1]) % 8 === 0 ||
      Number(s[1]+s[0]+s[2]) % 8 === 0 ||
      Number(s[1]+s[2]+s[0]) % 8 === 0 ||
      Number(s[2]+s[0]+s[1]) % 8 === 0 ||
      Number(s[2]+s[1]+s[0]) % 8 === 0
    ) return console.log('Yes')
    else return console.log('No')
  }

  const his = {}
  for (let i=0; i<s.length; i++) his[s[i]] = ~~his[s[i]]+1

  for (let i=0; i<e.length; i++) {
    const [a, b, c] = String(e[i]).split('')
    if (~~his[a] > 0) {
      his[a]--
      if (~~his[b] > 0) {
        his[b]--
        if (~~his[c] > 0) return console.log('Yes')
        else { his[a]++; his[b]++ }
      }
      else his[a]++
    }
  }

  return console.log('No')
}
