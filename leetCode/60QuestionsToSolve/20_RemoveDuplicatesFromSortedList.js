/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
Input: 1->1->2
Output: 1->2
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
const deleteDuplicates = (head) =>  {
  let pre = head

  while (pre && pre.next) {
    if (pre.val === pre.next.val) {
      pre.next = pre.next.next
    } else {
      pre = pre.next
    }
  }

  return head
}
