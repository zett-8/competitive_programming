import sys
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    n = int(input())
    nums = list(map(int, input().split()))
    acs_nums = deepcopy(nums)
    acs_nums.sort()

    count = 0

    for i in range(len(nums)):
        if nums[i] != acs_nums[i]:
            count += 1

    if count < 3:
        print('YES')
    else:
        print('NO')


if __name__ == '__main__':
    main()

