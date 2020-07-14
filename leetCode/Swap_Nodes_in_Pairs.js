/**
 Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.



Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
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
 * @return {ListNode}
 */

function ListNode(val, next=null) {
  this.val = val
  this.next = next
}

const swapPairs = (head) => {
  if (!head || !head.next) return head

  let n1 = head
  let n2 = n1.next
  let n3 = n2.next

  n1.next = swapPairs(n3)
  n2.next = n1

  return n2
}
