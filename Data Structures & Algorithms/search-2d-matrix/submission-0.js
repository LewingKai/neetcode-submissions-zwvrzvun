class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = matrix[0].length - 1; c >= 0; c--) {
                if (matrix[r][c] < target) {
                    continue
                } else if (matrix[r][c] === target) {
                    return true
                }
            }
        }

        return false
    }
}
