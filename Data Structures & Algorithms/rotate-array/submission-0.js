class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let i = 0
        
        while (i < k) {
            let temp = nums.pop()
            nums.unshift(temp)
            i++
        }

        return nums
    }
}
