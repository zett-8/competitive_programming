/**
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const TreeNode = function(val) {
  this.val = val
  this.left = null
  this.right = null
}

const buildTree = (preorder, inorder) => {
  const builder = (p_start, i_start, i_end) => {
    if (p_start > preorder.length-1 || i_start > i_end) return null

    const root = new TreeNode(preorder[p_start])
    let i_index = inorder.indexOf(root.val)

    root.left = builder(p_start+1, i_start, i_index-1)
    root.right = builder(p_start + i_index - i_start + 1, i_index + 1, i_end)

    return root
  }

  return builder(0, 0, inorder.length - 1)
}

/**
 * time complexity O(n)
 * space complexity O(n)
 */
