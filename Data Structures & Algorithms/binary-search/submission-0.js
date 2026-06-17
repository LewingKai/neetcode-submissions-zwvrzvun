class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1

        if (nums[l] === target) return l
        if (nums[r] === target) return r
        
        while (l < r) {
            let m = Math.floor((l + r) / 2)

            if (nums[m] === target) {
                return m
            } else if (nums[m] < target) {
                l++
            } else {
                r--
            }
        }

        return -1
    }
}
