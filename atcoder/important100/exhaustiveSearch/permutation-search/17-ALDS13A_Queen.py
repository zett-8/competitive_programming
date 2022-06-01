# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_13_A&lang=ja

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    g = [['.']*8 for _ in range(8)]
    n = int(input())

    for _ in range(n):
        y, x = map(int, input().split(' '))
        g[y][x] = 'Q'

    def check(h, w):
        velocity = [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]

        for hv, wv in velocity:
            _h = h + hv
            _w = w + wv
            while 0 <= _h <= 7 and 0 <= _w <= 7:
                if g[_h][_w] == 'Q':
                    return 0
                else:
                    _h += hv
                    _w += wv

        return 1

    def r():
        for h in range(8):
            if 'Q' not in g[h]:
                for w in range(8):
                    g[h][w] = 'Q'
                    if check(h, w):
                        r()
                    g[h][w] = '.'
                return

        print('\n'.join([''.join(v) for v in g]))
        sys.exit(0)

    r()


if __name__ == '__main__':
    main()
