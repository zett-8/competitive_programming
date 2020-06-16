/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val
    this.next = null
}

const addTwoNumbers = function(l1, l2) {
    const ans = new ListNode(0)

    addNodes(ans, l1, l2, 0)

    return ans
}

const addNodes = (ans, n1, n2, c) => {
    let carry = 0

    ans.val = n1.val + n2.val + c

    if (ans.val > 9) {
        ans.val -= 10
        carry = 1
    }

    if (!n1.next && !n2.next && !carry) return null

    ans.next = new ListNode(0)
    addNodes(ans.next, (n1.next || new ListNode(0)), (n2.next || new ListNode(0)), carry)
}

/**
 * time complexity O(n)
 * space complexity O(1)
 */
