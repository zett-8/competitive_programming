/**
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

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

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

/**
 * iteratively solution
 */
const reverseList = (head) => {
  let node = head
  let ans =  null

  while (node) {
    const n = new ListNode(node.val)
    n.next = ans

    node = node.next
    ans = n
  }

  return ans
}

/**
 * recursive
 */
const reverseList = (head, ans=null) => {
  return !head ? ans : reverseList(head.next, new ListNode(head.val, ans))
}
