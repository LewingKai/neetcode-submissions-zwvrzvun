/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    // 2. Split into two lists
    let second = slow.next
    slow.next = null

    // 3. Reverse second half
    let prev = null
    let current = second

    while (current !== null) {
        let next = current.next

        current.next = prev

        prev = current
        current = next
    }

    second = prev

    // 4. Merge two lists
    let first = head

    while (first !== null && second !== null) {
        let temp1 = first.next
        let temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2
    }
    }
}
