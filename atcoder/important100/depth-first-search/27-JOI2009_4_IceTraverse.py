# https://atcoder.jp/contests/joi2009yo/tasks/joi2009yo_d

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    w = int(input())
    h = int(input())

    g = [list(input().split(' ')) for _ in range(h)]

    def exp(h, w, count):
        if h < 0 or w < 0 or len(g) == h or len(g[0]) == w or g[h][w] == '0':
            return count

        g[h][w] = '0'
        r = [exp(h+hv, w+wv, count+1) for hv, wv in [[1, 0], [0, 1], [-1, 0], [0, -1]]]
        g[h][w] = '1'

        return max(r)

    ans = 0

    for _h in range(h):
        for _w in range(w):
            if g[_h][_w] == '1':
                ans = max(ans, exp(_h, _w, 0))

    print(ans)


if __name__ == '__main__':
    main()
