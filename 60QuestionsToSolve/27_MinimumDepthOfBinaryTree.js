/**
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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

const minDepth = root => {
  if (!root) return 0

  let min = Infinity

  const traverse = (node, depth) => {
    if (node.left === null && node.right === null) min = Math.min(min, depth)

    if (node.left) traverse(node.left, depth + 1)
    if (node.right) traverse(node.right, depth + 1)
  }

  traverse(root, 1)

  return min
}
