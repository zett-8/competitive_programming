from collections import deque

n = int(input())
nums = list(map(int, input().split()))

nums = deque(sorted(nums))

A = nums.popleft()
while len(nums) != 0:
    A = (A + nums.popleft()) / 2

print(A)
