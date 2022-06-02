# https://atcoder.jp/contests/joi2009ho/tasks/joi2009ho_b

import sys
import builtins
import math
from bisect import bisect_left

sys.setrecursionlimit(10 ** 7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    d = int(input())
    n = int(input())
    m = int(input())
    s = [int(input()) for _ in range(n - 1)] + [0, d]
    o = [int(input()) for _ in range(m)]
    s.sort()
    ans = 0

    for _o in o:
        r = bisect_left(s, _o)
        ans += min(abs(_o - s[r - 1]), abs(_o - s[r]))

    print(ans)


if __name__ == '__main__':
    main()
