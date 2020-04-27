/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 *
 * Assume a BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
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
 * @return {boolean}
 */

const isValidBST = function(root) {
  const check = (node, min, max) => {
    if (node.left && ( node.left.val >= node.val || node.left.val >= max || node.left.val <= min )) {
      return false
    }

    if (node.right && ( node.val >= node.right.val || node.right.val >= max || node.right.val <= min )) {
      return false
    }

    const re1 = node.left ? check(node.left, min, node.val) : true
    const re2 = node.right ? check(node.right, node.val, max) : true

    return re1 && re2
  }

  return root ? check(root, -Infinity, Infinity) : true
}

