/**
 Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const solve = (board) => {
  if (!board.length) return null

  const excep = {}

  const exploit = (y, x) => {
    if (excep[`${y}:${x}`]) return null
    excep[`${y}:${x}`] = true

    board[y][x] = 'X'
    if (board[y+1] && board[y+1][x] === 'O') exploit(y+1, x)
    if (board[y-1] && board[y-1][x] === 'O') exploit(y-1, x)
    if (board[y][x+1] && board[y][x+1] === 'O') exploit(y, x+1)
    if (board[y][x-1] && board[y][x-1] === 'O') exploit(y, x-1)
    board[y][x] = 'O'
  }

  for (let i=0; i<board[0].length; i++) {
    if (board[0][i] === 'X') excep[`0:${i}`] = true
    else exploit(0, i)

    if (board[board.length-1][i] === 'X') excep[`${board.length-1}:${i}`] = true
    else exploit(board.length-1, i)
  }

  for (let i=0; i<board.length; i++) {
    if (board[i][0] === 'X') excep[`${i}:0`] = true
    else exploit(i, 0)

    if (board[i][board[0].length-1] === 'X') excep[`${i}:${board[0].length-1}`] = true
    else exploit(i, board[0].length-1 )
  }

  // finally replace
  for (let y=0; y<board.length; y++) {
    for (let x=0; x<board[0].length; x++) if (!excep[`${y}:${x}`]) board[y][x] = 'X'
  }
}
