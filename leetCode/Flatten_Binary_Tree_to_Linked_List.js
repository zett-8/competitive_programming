/**
 Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

const flatten = (root) => {
  if (!root) return null
  if (!root.left) return flatten(root.right)

  const originalRight = root.right
  root.right = root.left
  root.left = null

  let current = root
  while (current.right) current = current.right
  current.right = originalRight

  flatten(root.right)
}

