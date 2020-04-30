const minMeetingRooms = (intervals) => {
  const rooms = {}
  const q = []
  let max = 0

  intervals.forEach((interval, i) => {
    q.push([i, interval.start])
    q.push([i, interval.end])
  })
  q.sort((a, b) => a[1] - b[1])

  for (let queue of q) {
    rooms[queue[0]] ? delete rooms[queue[0]] : rooms[queue[0]] = 1
    max = Math.max(max, Object.keys(rooms).length)
  }

  return max
}

const data = [
  [{start: 0, end: 30}, {start: 5, end: 10}, {start: 15, end: 20}],
  [{start: 9, end: 12}, {start: 2, end: 7}, {start: 5, end: 17}, {start: 12, end: 17}]
  ]

const ans = [2, 1000]

console.log(minMeetingRooms(data[0]))
console.log(minMeetingRooms(data[1]))
console.log(ans[0])

