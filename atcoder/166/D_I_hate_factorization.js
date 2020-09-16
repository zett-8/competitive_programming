const main = (input) => {
  const s = Number(input.trim())

  for (let x=0; x<=1000; x++) {
    for (let y=-1000; y<=999; y++) {
      if (x**5 - y**5 === s) return console.log(`${x} ${y}`)
    }
  }
}
