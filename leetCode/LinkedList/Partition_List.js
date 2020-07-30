/**
 Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const partition = (head, x) => {
  if (!head) return null

  const s = new ListNode()
  const l = new ListNode()
  let sCurrent = s
  let lCurrent = l

  let current = head

  while (current) {
    if (current.val >= x) {
      lCurrent.next = current
      lCurrent = lCurrent.next
    } else {
      sCurrent.next = current
      sCurrent = sCurrent.next
    }

    current = current.next
  }

  lCurrent.next = null
  sCurrent.next = l.next

  return s.next
}
