import sys
import math
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    S = int(input())
    nums = list(map(int, input().split()))
    nums.sort()

    print(nums[int(S/2)] - nums[int(S/2 - 1)])


if __name__ == '__main__':
    main()

