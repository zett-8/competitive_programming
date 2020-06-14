
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return false.

// Hide Company Tags Facebook
// Hide Tags Sort
// Hide Similar Problems (H) Merge Intervals (M) Meeting Rooms II


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */

// 132 ms
const canAttendMeetings = (intervals) => {
  intervals.sort((a, b) => a.start - b.start)

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].end > intervals[i-1].start) return false
  }
  return true
}
