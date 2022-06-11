# https://atcoder.jp/contests/abc255/tasks/abc255_c

import sys
import builtins
import math
from bisect import bisect_left
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    X, A, D, N = map(int, input().split(' '))
    diff = D if 0 <= D else D * -1

    def t(dis):
        m1 = min(N-1, dis // diff)
        m2 = min(N-1, m1 + 1)

        return min(abs(dis - (m1*diff)), abs(dis - (m2*diff)))

    if X == A:
        return print(0)

    if (X < A and 0 <= D) or (A < X and D <= 0):
        return print(abs(A - X))

    return print(t(abs(X-A)))


if __name__ == '__main__':
    main()
