/**
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @param {TreeNode} root
 * @return {number[]}
 */

// iterative
const inorderTraversal = (root) => {
  if (!root) return []

  const q = []
  const ans = []
  let node = root

  while (node || q.length) {
    while (node) {
      q.unshift(node)
      node = node.left
    }
    node = q.shift()
    ans.push(node.val)
    node = node.right
  }
  return ans
}

// recursive
const inorderTraversal = (root) => {
    if (!root) return []

    const left = root.left ? inorderTraversal(root.left) : []
    const right = root.right ? inorderTraversal(root.right) : []

    return [...left, root.val, ...right]
}


/**
 * time complexity O(n)
 * space complexity O(n)
 */
