class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        let n = nums.length
        
        for (let i = 0; i < n; i++) {
            let j = 0
            let temp = 1

            while (j < n) {
                if (j === i) {
                    j++
                } else {
                    temp *= nums[j]
                    j++
                }
            }

            res.push(temp)
        }

        return res
    }
}
