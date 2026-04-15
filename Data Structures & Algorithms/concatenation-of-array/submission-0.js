class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length
        let ans = new Array(2*n)

        for (let i = 0; i < ans.length; i++) {
            if (i >= n) {
                ans[i] = nums[i - n]
            } else {
                ans[i] = nums[i]
            }
        }

        return ans
    }
}
