/**
 Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function TreeNode(val=0, left=null, right=null) {
  this.val = val
  this.left = left
  this.right = right
}

const sortedListToBST = (head) => {
  if (!head) return null

  let beforeS = { next: head }
  let s = head
  let f = head

  while (f) {
    if (!f.next || !f.next.next) break

    beforeS = s
    f = f.next.next
    s = s.next
  }

  beforeS.next = null

  const root = new TreeNode(s.val)
  root.right = sortedListToBST(s.next)
  root.left = s.val === head.val ? null : sortedListToBST(head)

  return root
}
