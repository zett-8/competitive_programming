

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

const zigzagLevelOrder = function(root) {
  if (!root) return []

  const queue = [root]
  const ans = []
  let zigZag = false

  while (queue.length) {
    const nextQueue = []
    const currentLevelNodes = []

    while (queue.length) {
      const node = queue.shift()

      zigZag ? currentLevelNodes.unshift(node.val) : currentLevelNodes.push(node.val)

      if (node.left) nextQueue.push(node.left)
      if (node.right) nextQueue.push(node.right)
    }

    zigZag = !zigZag
    queue.push(...nextQueue)
    ans.push(currentLevelNodes)
  }

  return ans
}
