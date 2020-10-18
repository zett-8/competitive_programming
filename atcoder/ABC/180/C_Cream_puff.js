const main = (input) => {
  const n = Number(input.trim())

  const b = []
  for (let i=1; i<=Math.sqrt(n); i++) {
    if (n % i) continue
    console.log(i)
    if (n/i !== i) b.unshift(n/i)
  }

  for (let i=0; i<b.length; i++) console.log(b[i])
}
