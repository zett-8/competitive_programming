# https://atcoder.jp/contests/joi2008yo/tasks/joi2008yo_e

import sys
import builtins
from copy import deepcopy
import math
builtins.input = lambda: sys.stdin.readline().strip()
sys.setrecursionlimit(10**7)


def b_rev(s):
    return bin(int(s, 2) ^ int('1' * len(s), 2))[2:].zfill(len(s))


def count(li):
    w = len(li[0])
    h = len(li)
    c = 0
    for _w in range(w):
        tmp = 0
        for _h in range(h):
            if li[_h][_w] == '1':
                tmp += 1
        c += max(tmp, h - tmp)

    return c


def main():
    h, w = map(int, input().split(' '))
    g = [''.join(input().split(' ')) for _ in range(h)]

    ans = 0
    for i in range(2**h):
        _g = []
        for b in range(h):
            _g.append(b_rev(g[b]) if i & 1 << b else g[b])

        ans = max(ans, count(_g))

    print(ans)


if __name__ == '__main__':
    main()
