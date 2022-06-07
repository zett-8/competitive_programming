# https://atcoder.jp/contests/joi2012yo/tasks/joi2012yo_e

import sys
import builtins
import math

sys.setrecursionlimit(10 ** 7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    W, H = map(lambda x: int(x) + 2, input().split(' '))
    G = [['0'] + list(input().split(' ')) + ['0'] for _ in range(H - 2)]
    G = [list(['0'] * W)] + G + [list(['0'] * W)]

    def in_grid(h, w):
        return (0 <= h < H) and (0 <= w < W)

    ans = 0
    li = {(0, 0)}

    while len(li):
        n_li = set()

        for c in li:
            h, w = c

            if not in_grid(h, w) or G[h][w] == '.':
                continue

            G[h][w] = '.'

            if in_grid(h + 1, w) and G[h + 1][w] == '1':
                ans += 1
            else:
                n_li.add((h + 1, w))

            if in_grid(h - 1, w) and G[h - 1][w] == '1':
                ans += 1
            else:
                n_li.add((h - 1, w))

            if in_grid(h, w + 1) and G[h][w + 1] == '1':
                ans += 1
            else:
                n_li.add((h, w + 1))

            if in_grid(h, w - 1) and G[h][w - 1] == '1':
                ans += 1
            else:
                n_li.add((h, w - 1))

            if h % 2 == 1:
                if in_grid(h - 1, w + 1) and G[h - 1][w + 1] == '1':
                    ans += 1
                else:
                    n_li.add((h - 1, w + 1))

                if in_grid(h + 1, w + 1) and G[h + 1][w + 1] == '1':
                    ans += 1
                else:
                    n_li.add((h + 1, w + 1))
            else:
                if in_grid(h - 1, w - 1) and G[h - 1][w - 1] == '1':
                    ans += 1
                else:
                    n_li.add((h - 1, w - 1))

                if in_grid(h + 1, w - 1) and G[h + 1][w - 1] == '1':
                    ans += 1
                else:
                    n_li.add((h + 1, w - 1))

        li = n_li

    print(ans)


if __name__ == '__main__':
    main()
