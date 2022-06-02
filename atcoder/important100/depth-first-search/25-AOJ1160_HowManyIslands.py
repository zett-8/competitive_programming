# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=1160&lang=jp

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def explore(g, h, w):
    if h < 0 or w < 0 or len(g) == h or len(g[0]) == w or g[h][w] == '0':
        return 1

    v = [[0, 1], [1, 0], [0, -1], [-1, 0], [-1, -1], [1, 1], [-1, 1], [1, -1]]
    g[h][w] = '0'
    for _v in v:
        hv, wv = _v
        explore(g, h + hv, w + wv)


def main():
    while True:
        w, h = map(int, input().split(' '))

        if w == 0 == h:
            break

        g = [list(input().split()) for _ in range(h)]

        island = 0

        for _h in range(h):
            for _w in range(w):
                if g[_h][_w] == '1':
                    explore(g, _h, _w)
                    island += 1

        print(island)


if __name__ == '__main__':
    main()
