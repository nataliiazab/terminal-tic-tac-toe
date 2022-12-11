/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/

let emptyBoard = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];

// for (let i = 0; i < emptyBoard.length; i++) {
//   let row = emptyBoard[i];
//   console.log(row);
//}

export function printBoard(board) {
  for (let i = 0; i < emptyBoard.length; i++) {
    let row = emptyBoard[i];
    console.log(row);
  }
}
//emptyBoard.forEach((row) => console.log(row));
printBoard();
/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {}
