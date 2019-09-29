import sys
import math
from copy import deepcopy
from collections import deque
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)


def main():
    mod = 10**9 + 7

    N, K = map(int, input().split())

    blue = K
    red = N - K

    for i in range(1, K+1):
        b_p = cmb(blue, i)
        r_p = cmb(red, i - 1) + cmb(red, i) + cmb(red, i) + cmb(red, i + 1)

        if i == 1 and red == 0:
            print(1 % mod)
        else:
            print((b_p * r_p) % mod)


def cmb(n, r):
    if n < r or r == 0:
        return 0

    n -= 1
    r -= 1
    r = min(n - r, r)

    if r <= 0:
        return 1

    over = reduce(mul, range(n, n - r, -1))
    under = reduce(mul, range(1, r + 1))
    return over // under


if __name__ == '__main__':
    main()

