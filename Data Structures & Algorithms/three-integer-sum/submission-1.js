class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length === 0) return []
        nums.sort((a, b) => a - b)
        let res = [],
            sum = 0
        for (let i = 0; i < nums.length; i++) {
            let a = nums[i]
            if (a > 0) {
                break
            }
            if (i > 0 && nums[i] === nums[i - 1]) continue
            let l = i + 1,
                r = nums.length - 1
            while (l < r) {
                sum = a + nums[l] + nums[r]
                if (sum > 0) {
                    r--
                } else if (sum < 0) {
                    l++
                } else {
                    res.push([a, nums[l], nums[r]])
                    l++
                    r--
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++
                    }
                }
            }
        }
        return res
    }
}
