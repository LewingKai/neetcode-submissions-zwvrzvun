class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = []
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1
        }
        let arr = Object.entries(count).map(([num, freq]) => [parseInt(num), freq])
        arr.sort((a, b) => b[1] - a[1])
        return arr.slice(0, k).map(a => a[0])
    }
}
