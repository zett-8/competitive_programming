/**
 Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next=null) {
  this.val = val
  this.next = next
}

const removeNthFromEnd = (head, n) => {
  let ans = new ListNode(null, head)
  let back = front = ans
  for (let i=0; i<n; i++)  front = front.next

  if (!front) return head

  while (true) {
    if (front.next === null) {
      back.next = back.next.next
      break
    }
    back = back.next
    front = front.next
  }

  return ans.next
}
