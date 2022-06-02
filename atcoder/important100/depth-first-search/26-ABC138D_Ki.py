# https://atcoder.jp/contests/abc138/tasks/abc138_d

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    n, q = map(int, input().split(' '))
    t = [[] for _ in range(n)]
    s = [0 for _ in range(n)]
    h = [False] * n

    for _ in range(n-1):
        a, b = map(int, input().split(' '))
        t[a-1].append(b-1)
        t[b-1].append(a-1)

    for _ in range(q):
        i, p = map(int, input().split(' '))
        s[i-1] += p

    def rc(i, p):
        s[i] += p
        h[i] = True
        for child in t[i]:
            if not h[child]:
                rc(child, s[i])

        return

    rc(0, 0)

    print(' '.join(map(str, s)))


if __name__ == '__main__':
    main()
