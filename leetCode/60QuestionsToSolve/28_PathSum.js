/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values
 * along the path equals the given sum.
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
 * @param {number} sum
 * @return {boolean}
 */

const hasPathSum = (root, sum) => {
  let ans = false

  const traverse = (node, his) => {
    const history = his.concat(node.val)

    if (!node.left && !node.right && history.reduce((a,b) => a+b, 0) === sum) ans = true

    if (node.left) traverse(node.left, history)
    if (node.right) traverse(node.right, history)
  }

  if (root) traverse(root, [])

  return ans
}
