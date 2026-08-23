class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temp = []
        for (let num of nums) {
            if (temp.includes(num)) {
                return true
            } else (
                temp.push(num)
            )
        }
        return false
    }
}
