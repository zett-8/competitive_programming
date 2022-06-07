# https://atcoder.jp/contests/abc095/tasks/arc096_a?

import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline


def main():
    a, b, c, x, y = map(int, input().split(' '))

    cost = 0

    if a+b > c*2:
        min_p = min(x, y)
        cost += min_p * 2 * c
        x -= min_p
        y -= min_p

    if x > 0:
        cost += x * 2 * c if a > c*2 else a * x

    if y > 0:
        cost += y * 2 * c if b > c*2 else b * y

    print(cost)


if __name__ == '__main__':
    main()
