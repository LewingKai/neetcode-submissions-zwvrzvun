class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = ''
        let i = 0
        let j = 0

        while (i < word1.length && j < word2.length) {
            res += word1[i]
            i++
            res += word2[j]
            j++
        }

        while (i < word1.length) {
            res += word1[i]
            i++
        }

        while (j < word2.length) {
            res += word2[j]
            j++
        }

        return res
    } 
}
