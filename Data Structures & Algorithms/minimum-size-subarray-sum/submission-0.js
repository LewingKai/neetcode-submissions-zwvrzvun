class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = Infinity

        for (let i = 0; i < nums.length; i++) {
            let r = i
            let sum = 0

            while (r < nums.length) {
                sum += nums[r]

                if (sum >= target) {
                    res = Math.min(res, r - i + 1)
                    break
                }

                r++
            }
        }

        return res === Infinity ? 0 : res
    }
}
