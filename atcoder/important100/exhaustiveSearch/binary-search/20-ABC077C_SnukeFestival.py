# https://atcoder.jp/contests/abc077/tasks/arc084_a

import sys
import builtins
import math
from bisect import bisect_left, bisect_right
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    _ = int(input())
    top = sorted(list(map(int, input().split(' '))))
    mid = list(map(int, input().split(' ')))
    bottom = sorted(list(map(int, input().split(' '))))
    ans = 0

    for m in mid:
        t = bisect_right(top, m-1)
        b = len(bottom) - bisect_left(bottom, m+1)
        ans += t * b

    print(ans)


if __name__ == '__main__':
    main()
