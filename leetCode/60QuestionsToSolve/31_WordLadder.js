/**
 Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.

 Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

const ladderLength = (beginWord, endWord, wordList) => {
  wordList = Array.from(new Set(wordList))

  let ans = Infinity
  const queue = [{ wrd: beginWord, count: 1}]

  while (queue.length) {
    const nextQueue = []

    while (queue.length) {
      const q = queue.shift()
      for (let v of wordList) {
        if (transformable(v, q.wrd) && v === endWord) {
          ans = Math.min(ans, q.count + 1)
        } else if (transformable(v, q.wrd)) {
          wordList = wordList.filter(w => w !== v)
          nextQueue.push({ wrd: v, count: q.count + 1 })
        }
      }
    }
    queue.push(...nextQueue)
  }

  return ans === Infinity ? 0 : ans
}

const transformable = (a, b) => {
  let diff = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff += 1
  }

  return diff === 1
}
