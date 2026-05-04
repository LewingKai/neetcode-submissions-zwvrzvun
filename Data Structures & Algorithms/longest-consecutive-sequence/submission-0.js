class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0

        nums.sort((a, b) => a - b)
        let max = 1
        let cur = 1

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                continue
            } else if (nums[i] - nums[i - 1] === 1) {
                cur++
            } else {
                max = Math.max(max, cur)
                cur = 1
            }
        }

        return Math.max(max, cur)
    }
}
