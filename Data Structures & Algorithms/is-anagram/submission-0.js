class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let map = new Map()
        let count

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                count = map.get(s[i])
                map.set(s[i], count + 1)
            } else {
                map.set(s[i], 1)
            }
        }

        for (let j = 0; j < t.length; j++) {
            if (!map.has(t[j])) {
                return false
            } else {
                count = map.get(t[j]) - 1
                if (count < 0) {
                    return false
                } else {
                    map.set(t[j], count)
                }
            }
        }

        for (let i = 0; i < s.length; i++) {
            if (map.get(s[i]) > 0) return false
        }

        return true
    }
}
