`
The Challenge
In this exercise, you're going to decompress a compressed string.

Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

The input

3[abc]4[ab]c

Would be output as

abcabcabcababababc

Other rules
Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

Characters allowed as input include digits, small English letters and brackets [ ].

Digits are only to represent amount of repetitions.

Letters are just letters.

Brackets are only part of syntax of writing repeated substring.

Input is always valid, so no need to check its validity.

Learning objectives
This question gives you the chance to practice with strings, recursion, algorithm, compilers, automata, and loops. It’s also an opportunity to work on coding with better efficiency.
`


const inpt = '2[3[a]b]'

const fn = (s) => {
  const _input = Array.from(s)

  let leftChars = ''
  let num = ''

  for (let i = 0; i < _input.length; i++) {
    if (/[0-9]/.test(_input[i])) {

      num += _input[i]

    } else if (/[a-z]/.test(_input[i])) {

      leftChars += _input[i]

    } else if (_input[i] === '[') {

      let balance = 0
      for (let e = i + 1; e < _input.length; e++) {
        if (_input[e] === '[') {
          balance += 1
        }
        if (_input[e] === ']') {
          if (balance === 0) return fn(leftChars + _input.slice(i+1, e).join('').repeat(parseInt(num, 10)) + _input.slice(e+1).join(''))
          if (balance > 0) balance -= 1
        }
      }

    }
  }

  return s
}

console.log(fn(inpt))
