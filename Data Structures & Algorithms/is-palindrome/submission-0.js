class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(c) {
        return ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
    }

    isPalindrome(s) {
        let newStr = ''

        for (let c of s) {
            if (this.isAlphaNumeric(c)) {
                newStr += c.toLowerCase()
            }
        }

        return newStr === newStr.split('').reverse().join('')
    } 
}
