const solve = (n) => n <= 1 ? n : solve(Math.floor(n/2)) * 2 + 1
const main = (input) => console.log(solve(Number(input.trim())))
