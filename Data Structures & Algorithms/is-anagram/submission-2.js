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

        for (let c of s) {
            if (map.has(c)) {
                count = map.get(c)
                map.set(c, count + 1)
            } else {
                map.set(c, 1)
            }
        }

        for (let c of t) {
            if (map.has(c)) {
                count = map.get(c)
                map.set(c, count - 1)
                if (count < 1) return false
            } else {
                return false
            }
        }

        return true
    }
}
