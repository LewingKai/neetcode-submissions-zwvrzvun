class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count
        let map = new Map()

        if (nums.length === 1) return nums[0]

        for (let num of nums) {
            if (map.has(num)) {
                count = map.get(num)
                map.set(num, count + 1)

                if (count + 1 > Math.floor(nums.length / 2)) {
                    return num
                }
            } else {
                map.set(num, 1)
            }
        }
    }
}
