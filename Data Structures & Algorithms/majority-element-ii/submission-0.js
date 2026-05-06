class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let n = nums.length
        nums.sort((a, b) => a - b)
        let count = 1
        let res = []

        for (let i = 0; i < n; i++) {
            if (nums[i] === nums[i + 1]) {
                count++
            } else {
                if (count > (n / 3)) {
                    res.push(nums[i])
                }
                count = 1
            }
        }

        return res
    }
}
