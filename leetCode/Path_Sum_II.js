/**
 Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @param {number} sum
 * @return {number[][]}
 */

const pathSum = (root, sum) => {
  if (!root) return []
  const ans = []

  const trv = (node, arr, s) => {
    if (node.left) trv(node.left, [...arr, node.val], s + node.val)
    if (node.right) trv(node.right, [...arr, node.val], s + node.val)
    if (!node.left && !node.right && n_s === sum) ans.push([...arr, s + node.val])
  }

  trv(root, [], 0)

  return ans
}
