/**
 Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  for (let c=0; c<board[0].length; c++) {
    const x = {}
    for (let r=0; r<board.length; r++) {
      if (board[r][c] !== '.') x[board[r][c]] = ~~x[board[r][c]]+1
      const y = {}

      board[r].forEach(v => v !== '.' ? y[v] = ~~y[v]+1 : null)

      const re = Object.entries(y).every(([k, v]) => v < 2)
      if (!re) return false
    }
    const re = Object.entries(x).every(([k, v]) => v < 2)
    if (!re) return false
  }

  for (let c=0; c<board[0].length; c+=3) {
    for (let r=0; r<board.length; r+=3) {
      const x = {}
      x[board[c][r]] = ~~x[board[c][r]]+1
      x[board[c+1][r]] = ~~x[board[c+1][r]]+1
      x[board[c+2][r]] = ~~x[board[c+2][r]]+1
      x[board[c][r+1]] = ~~x[board[c][r+1]]+1
      x[board[c][r+2]] = ~~x[board[c][r+2]]+1
      x[board[c+1][r+1]] = ~~x[board[c+1][r+1]]+1
      x[board[c+1][r+2]] = ~~x[board[c+1][r+2]]+1
      x[board[c+2][r+1]] = ~~x[board[c+2][r+1]]+1
      x[board[c+2][r+2]] = ~~x[board[c+2][r+2]]+1
      if (~~x['.']) delete x['.']

      const re = Object.entries(x).every(([k, v]) => v < 2)
      if (!re) return false
    }
  }

  return true
}
