class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            let row = []
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.' && row.includes(board[i][j])) {
                    return false
                } else {
                    row.push(board[i][j])
                }
            }
        }

        for (let i = 0; i < 9; i++) {
            let col = []
            for (let j = 0; j < 9; j++) {
                if (board[j][i] !== '.' && col.includes(board[j][i])) {
                    return false
                } else {
                    col.push(board[j][i])
                }
            }
        }

        for (let square = 0; square < 9; square++) {
            let seen = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.includes(board[row][col])) return false;
                    seen.push(board[row][col]);
                }
            }
        }

        return true
    }
}
