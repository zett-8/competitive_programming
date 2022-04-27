const main = (input) => {
  let s = input.trim()

  for (let a=0, b=s.length-1; a<=b;) {
    if (s[a] === s[b]) { a++;b-- }
    else if (s[b] === 'a') b--
    else return 'No'
  }

  return 'Yes'
}
