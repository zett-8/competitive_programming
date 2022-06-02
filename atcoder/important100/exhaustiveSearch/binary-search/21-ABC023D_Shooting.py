# https://atcoder.jp/contests/abc023/tasks/abc023_d

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    n = int(input())
    b = [list(map(int, input().split(' '))) for _ in range(n)]

    def check(x):
        d = sorted([(x-bal[0]) // bal[1] for bal in b])

        for i in range(len(d)):
            if d[i] < i:
                return 0

        return 1

    l = 0
    r = 10**18
    suc = None
    while l < r:
        m = (l+r) // 2

        if check(m):
            suc = True
            r = m
        else:
            suc = False
            l = m+1

    print(l)


if __name__ == '__main__':
    main()
