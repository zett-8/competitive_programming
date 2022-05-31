# https://atcoder.jp/contests/s8pc-6/tasks/s8pc_6_b

import sys
import math
from statistics import median
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce

sys.setrecursionlimit(20000000)


# input = sys.stdin.readline


def main():
    n = int(input())
    q = [list(map(int, input().split(' '))) for _ in range(n)]
    a = []
    b = []
    for i in range(n):
        a.append(q[i][0])
        b.append(q[i][1])

    def measure(start, end):
        count = 0

        for left, right in q:
            count += abs(start - left)
            count += abs(left - right)
            count += abs(right - end)

        return count

    ans = math.inf

    for s in a:
        for e in b:
            ans = min(ans, measure(s, e))

    print(ans)


if __name__ == '__main__':
    main()
