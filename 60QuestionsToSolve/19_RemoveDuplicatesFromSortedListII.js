/**
 Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

 Return the linked list sorted as well.

 Example 1:

 Input: 1->2->3->3->4->4->5
 Output: 1->2->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

const deleteDuplicates = function(head) {
  let ans = new ListNode(null)
  let ansCurrent = ans
  let current = head

  while (current) {
    if (!current.next || current.val !== current.next.val) {
      ansCurrent.next = new ListNode(current.val)
      ansCurrent = ansCurrent.next
      current = current.next
    } else {
      while (current && current.next && current.val === current.next.val) {
        current = current.next
      }
      current = current.next
    }
  }
  return ans.next
}
