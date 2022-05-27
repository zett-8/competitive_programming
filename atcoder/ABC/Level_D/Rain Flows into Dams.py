import sys
import math
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    N = int(input())
    nums = list(map(int, input().split()))

    ans = [0] * N

    # First mountain
    s = 0
    for i in range(len(nums)):
        if i % 2:
            s += nums[i]
        else:
            s -= nums[i]

    ans[0] = abs(s)

    for i in range(1, len(nums)):
        ans[i] = int((nums[i-1] - (ans[i-1] / 2)) * 2)

    print(*ans, sep=' ')


if __name__ == '__main__':
    main()

