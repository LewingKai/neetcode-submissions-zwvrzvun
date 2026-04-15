class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let temp = strs[0]

        for (let str of strs) {
            while (str.indexOf(temp) !== 0) {
                temp = temp.slice(0, -1)
            }
        }

        return temp
    }
}
