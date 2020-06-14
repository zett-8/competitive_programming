/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
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
 * @return {number[][]}
 */

const levelOrder = function(root) {
  if (!root) return []

  const queue = [root]
  const ans = []

  while (queue.length) {
    const currentLevelNodes = []
    const nextQueue = []

    while (queue.length) {
      const node = queue.shift()
      currentLevelNodes.push(node.val)

      if (node.left) nextQueue.push(node.left)
      if (node.right) nextQueue.push(node.right)
    }

    ans.push(currentLevelNodes)
    queue.push(...nextQueue)
  }
  return ans
}
