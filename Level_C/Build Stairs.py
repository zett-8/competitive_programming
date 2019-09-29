import sys
from collections import deque
sys.setrecursionlimit(20000000)
input = sys.stdin.readline


def main():
    n = int(input())

    nums = list(map(int, input().split()))

    ans = 'Yes'

    for x in reversed(range(1, len(nums))):
        if nums[x-1] - nums[x] >= 2:
            ans = 'No'

        elif nums[x-1] - nums[x] == 1:
            nums[x-1] -= 1

        else:
            continue

    print(ans)


if __name__ == '__main__':
    main()

