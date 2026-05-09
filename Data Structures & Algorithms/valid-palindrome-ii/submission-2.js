class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            if (s[l] === s[r]) {
                l++
                r--
            } else {
                return (this.isPalindrome(l + 1, s, r) || this.isPalindrome(l, s, r - 1))
            }
        }

        return true
    }

    isPalindrome(l, s, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false
            }

            l++
            r--
        }

        return true
    }
}
