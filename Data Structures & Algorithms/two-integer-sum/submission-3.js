class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0
        while (i < nums.length - 1) {
            for (let j = i + 1; j < nums.length; j++ ) {
                let sum = nums[i] + nums[j]
                if (sum === target) {
                    return [i, j]
                }
            }
            i++
        }
        return []
    }
}
