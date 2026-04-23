class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === k) return nums

        let count = {}

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        let temp = Object.entries(count).sort((a, b) => b[1] - a[1])

        return temp.slice(0, k).map(t => t[0])
    }
}
