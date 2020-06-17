/**
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:


begin to intersect at node c1.



Example 1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.


Example 2:


Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.


Example 3:


Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null

  let len1 = 0
  let len2 = 0

  let headA_p = headA
  let headB_p = headB

  while (headA_p.next || headB_p.next) {
    if (headA_p.next) {
      headA_p = headA_p.next
      len1++
    }

    if (headB_p.next) {
      headB_p = headB_p.next
      len2++
    }
  }

  // in case there is no intersection
  if (headA_p !== headB_p) return null

  headA_p = headA
  headB_p = headB

  const dif = Math.abs(len1 - len2)
  for (let i=0; i<dif; i++) {
    if (len1 > len2) headA_p = headA_p.next
    if (len1 < len2) headB_p = headB_p.next
  }

  while (headA_p !== headB_p) {
    headA_p = headA_p.next
    headB_p = headB_p.next
  }

  return headA_p
}

/**
 * time complexity O(m + n)
 * space complexity O(1)
 */
