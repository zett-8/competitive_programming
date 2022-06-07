# https://atcoder.jp/contests/joi2011yo/tasks/joi2011yo_e

import sys
import builtins
import math
from copy import deepcopy
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    H, W, N = map(int, input().split(' '))
    _g = [list(input()) for _ in range(H)]

    start = ()

    for h in range(H):
        for w in range(W):
            if _g[h][w] == 'S':
                start = (h, w)

    li = set()
    li.add(start)
    count = 0

    for looking_for in range(1, N+1):
        g = deepcopy(_g)

        while len(li):
            n_li = set()

            for c in li:
                h, w = c
                if not (0 <= h < H) or not (0 <= w < W) or g[h][w] == 'X':
                    continue

                if g[h][w] == str(looking_for):
                    li = set([(h, w)])
                    break

                g[h][w] = 'X'
                n_li.add((h+1, w))
                n_li.add((h, w+1))
                n_li.add((h, w-1))
                n_li.add((h-1, w))

            else:
                count += 1
                li = n_li
                continue

            break

    print(count)


if __name__ == '__main__':
    main()
