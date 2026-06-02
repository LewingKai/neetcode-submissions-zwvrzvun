class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = []

        for (let op of operations) {
            let index = record.length - 1
            if (op === "D") {
                record.push(Number(record[index] * 2))
            } else if (op === "+") {
                record.push(Number(record[index] + record[index - 1]))
            } else if (op === "C") {
                record.pop()
            } else {
                record.push(Number(op))
            }
        }

        return record.reduce((acc, cur) => acc + cur, 0)
    }
}
