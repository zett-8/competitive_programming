import sys
import math
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    N = int(input())
    nums = [int(input()) for _ in range(N)]

    a = deepcopy(nums)
    a.sort(reverse=True)

    for i in range(len(nums)):
        if a[0] == nums[i]:
            print(a[1])
        else:
            print(a[0])


if __name__ == '__main__':
    main()

