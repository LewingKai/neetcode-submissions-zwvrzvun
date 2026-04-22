class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let map = new Map()
        let count

        for (let num of nums) {
            if (map.has(num)) {
                count = map.get(num)
                map.set(num, count + 1)
            } else {
                map.set(num, 1)
            }
        }

        let i = 0
        let j = 0

        while (i < 3 && j < nums.length) {
            if (map.has(i)) {
                count = map.get(i)
                nums[j] = i
                if (count === 1) {
                    i++
                } else {
                    map.set(i, count - 1)
                }
                j++
            } else {
                i++
            }
        }
    }
}
