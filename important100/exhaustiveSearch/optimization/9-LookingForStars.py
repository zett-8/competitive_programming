# https://atcoder.jp/contests/joi2008yo/tasks/joi2008yo_d

import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline


def main():
    m = [tuple(map(int, input().split(' '))) for _ in range(int(input()))]
    n = [tuple(map(int, input().split(' '))) for _ in range(int(input()))]

    for x, y in m:
        for tx, ty in n:
            for ox, oy in m:
                xd = ox-x
                yd = oy-y

                if (tx+xd, ty+yd) not in n:
                    break
            else:
                print(tx-x, ty-y)
                return


if __name__ == '__main__':
    main()
