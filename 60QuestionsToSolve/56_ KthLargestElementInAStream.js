/**
  Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

  Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

  Example:

  int k = 3;
  int[] arr = [4,5,8,2];
  KthLargest kthLargest = new KthLargest(3, arr);
  kthLargest.add(3);   // returns 4
  kthLargest.add(5);   // returns 5
  kthLargest.add(10);  // returns 5
  kthLargest.add(9);   // returns 8
  kthLargest.add(4);   // returns 8
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */

/**
 * @param {number} val
 * @return {number}
 */

class KthLargest {
  constructor(k, nums) {
    this.nums = nums.sort((a,b) => b - a)
    this.k = k
  }

  add(val, start=0, end=this.nums.length) {
    const mid = Math.floor((end - start) / 2) + start
    if (this.nums[mid] === val || end - start <= 1) {
       if (this.nums[mid] > val) {
         this.nums = [...this.nums.slice(0, mid+1), val, ...this.nums.slice(mid+1)]
       } else {
         this.nums = [...this.nums.slice(0, mid), val, ...this.nums.slice(mid)]
       }
      return this.nums[this.k - 1]
    } else if (this.nums[mid] < val) {
      return this.add(val, start, mid)
    } else {
      return this.add(val, mid+1, end)
    }
  }
}
