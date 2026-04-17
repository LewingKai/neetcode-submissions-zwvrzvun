class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let temp = []

        for (let num of nums) {
            if (num !== val) {
                temp.push(num)
            }
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = temp[i]
        }

        return temp.length
    }
}
