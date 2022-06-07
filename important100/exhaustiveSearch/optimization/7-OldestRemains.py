# https://atcoder.jp/contests/joi2007ho/tasks/joi2007ho_c

import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
from itertools import combinations
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline

def main():
    n = int(input())
    c = [tuple(map(int, input().split(' '))) for _ in range(n)]
    s = set(c)

    ans = 0

    for i, j in combinations(c, 2):
        x1, y1 = i
        x2, y2 = j

        xd = abs(x1-x2)
        yd = abs(y1-y2)

        if (x1+yd, y1+xd) in s and (x2+yd, y2+xd) in s:
            ans = max(ans, xd**2 + yd**2)

    print(ans)


if __name__ == '__main__':
    main()
