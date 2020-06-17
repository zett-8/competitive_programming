/**
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = (board, word) => {
  const w = board[0].length
  const h = board.length
  const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]]

  const rc = (x, y, word) => {
    if (!word.length) return true

    for (let [dy, dx] of dir) {
      const nx = x + dx
      const ny = y + dy
      if (nx >= 0 && nx < w && ny >= 0 && ny < h && board[ny][nx] === word[0]) {
        const tmp = board[y][x]
        board[y][x] = '*'
        if (rc(nx, ny, word.slice(1))) return true
        board[y][x] = tmp
      }
    }
  }

  for (let [y, b] of board.entries()) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === word[0]) {
        if (rc(x, y, word.slice(1))) return true
      }
    }
  }

  return false
}
