class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []

        if (s.length % 2 !== 0) return false

        for (let c of s) {
            let temp = stack[stack.length - 1]
            if (c === ")") {
                if (temp === "(") {
                    stack.pop()
                } else {
                    return false
                }
            } else if (c === "}") {
                if (temp === "{") {
                    stack.pop()
                } else {
                    return false
                }
            } else if (c === "]") {
                if (temp === "[") {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0 ? true : false
    }
}
