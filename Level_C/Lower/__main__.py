import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline


def main():
    N = int(input())
    Ps = list(map(int, input().split()))

    count = 0

    ans = [0]

    for i in range(len(Ps) - 1):
        if Ps[i] >= Ps[i+1]:
            count += 1
        else:
            ans.append(count)
            count = 0

        if i == len(Ps) - 2:
            ans.append(count)

    print(max(ans))


if __name__ == '__main__':
    main()
