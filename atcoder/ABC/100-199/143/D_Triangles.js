const mod = 10**9 + 7
const mlog = (v) => `${(v % mod + mod) % mod}`
const bisect_left = (arr, value) => {
  for (let s=0, e=arr.length-1; true;) {
    if (s === e) return arr[s] < value ? s+1 : s

    let mid = s + Math.floor((e-s)/2)

    if (arr[mid] === value) {
      while (arr[mid] === value) mid--
      return mid+1
    }
    else if (arr[mid] > value) {
      e = mid-1
      if (s > e) return mid
    }
    else if (arr[mid] < value) s = mid+1
  }
}

const main = (input) => {
  input = input.trim().split('\n')
  const n = Number(input[0])
  const q = input[1].split(' ').map(Number).sort((a, b) => a - b)

  let ans = 0

  for (let a=0; a<n-2; a++) {
    for (let b=a+1; b<n-1; b++) {
      ans += bisect_left(q, q[a] + q[b]) - (b+1)
    }
  }

  return ans
}
