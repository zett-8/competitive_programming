/**
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.



Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
  if (!root) return null

  const q = [root]

  while (q.length) {
    for (let i=0; i<q.length-1; i++) {
      q[i].next = q[i+1]
    }
    q[q.length-1].next = null

    const nextQ = []
    while (q.length) {
      const node = q.shift()
      if (node.left && node.right) nextQ.push(node.left, node.right)
    }

    q.push(...nextQ)
  }

  return root
}

/**
 * time complexity O(n)
 * space complexity O(n)
 */
