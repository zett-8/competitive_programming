# https://atcoder.jp/contests/abc128/tasks/abc128_c

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
    b = [list(map(int, input().split(' '))) for _ in range(m)]
    p = list(map(int, input().split(' ')))

    ans = 0
    for i in range(2**n):
        for bi, _b in enumerate(b):
            j, *s = _b
            on = 0
            for _s in s:
                if i & 1 << _s-1:
                    on += 1
            if p[bi] != on % 2:
                break
        else:
            ans += 1

    print(ans)


if __name__ == '__main__':
    main()
