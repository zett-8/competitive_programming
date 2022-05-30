# https://atcoder.jp/contests/pakencamp-2019-day3/tasks/pakencamp_2019_day3_c

import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline


def main():
    n, m = map(int, input().split(' '))
    scr = [list(map(int, input().split(' '))) for _ in range(n)]

    ans = 0

    for i in range(0, m-1):
        for j in range(i+1, m):
            score = 0
            for s in range(0, n):
                score += max(scr[s][i], scr[s][j])

            ans = max(ans, score)

    print(ans)


if __name__ == '__main__':
    main()
