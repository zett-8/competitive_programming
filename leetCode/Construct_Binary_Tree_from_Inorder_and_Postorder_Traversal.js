/**
 Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val=0, left=null, right=null) {
  this.val = val
  this.left = left
  this.right = right
}

const buildTree = (inorder, postorder) => {
  if (!inorder.length) return null

  const root = new TreeNode(postorder.pop())
  const idx = inorder.indexOf(root.val)

  root.right = buildTree(inorder.slice(idx+1), postorder)
  root.left = buildTree(inorder.slice(0, idx), postorder)

  return root
}
