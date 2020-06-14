/**
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Note: A leaf is a node with no children.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = root => {
  if (!root) return 0

  let max = 0

  const traverse = (node, depth) => {
    if (!node.left && !node.right) max = Math.max(max, depth)

    if (node.left) traverse(node.left, depth + 1)
    if (node.right) traverse(node.right, depth + 1)
  }
  traverse(root, 1)

  return max
}
