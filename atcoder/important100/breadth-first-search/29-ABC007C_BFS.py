# https://atcoder.jp/contests/abc007/tasks/abc007_3

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    h, w = map(int, input().split(' '))
    s = tuple(map(lambda x: int(x)-1, input().split(' ')))
    e = tuple(map(lambda x: int(x)-1, input().split(' ')))
    g = [list(input()) for _ in range(h)]

    li = [s]

    count = 0
    while len(li):
        n_li = []
        for _h, _w in li:
            if not(0 < _h < h) or not (0 < _w < w) or g[_h][_w] == '#' or type(g[_h][_w]) is int:
                continue

            g[_h][_w] = count
            n_li.append((_h+1, _w))
            n_li.append((_h, _w+1))
            n_li.append((_h-1, _w))
            n_li.append((_h, _w-1))

        count += 1
        li = n_li

    print(g[e[0]][e[1]])

if __name__ == '__main__':
    main()
