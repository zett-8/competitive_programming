/**
 Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

const reverseBetween = function(head, m, n) {
  const tmp = { next: head }
  let current = tmp

  let left = null
  let beforeLeft = null

  for (let count=1; current; count++) {
    // current.next is 'm'
    if (count === m) {
      beforeLeft = current
      left = beforeLeft.next
    }

    //current.next is 'n'
    if (count === n) {
      const afterRight = current.next.next
      current.next.next = null

      const reversedList = reverseList(left, afterRight)
      beforeLeft.next = reversedList

      return tmp.next
    }

    current = current.next
  }
}

const reverseList = (head, last) => {
  if (!head) return head
  if (!head.next) {
    head.next = last
    return head
  }

  const newHead = reverseList(head.next)

  head.next = last
  let current = newHead

  while (current) {
    if (!current.next) {
      current.next = head
      return newHead
    }

    current = current.next
  }
}
