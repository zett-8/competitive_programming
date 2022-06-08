# https://atcoder.jp/contests/abc088/tasks/abc088_d

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    H, W = map(int, input().split(' '))
    G = [list(input()) for _ in range(H)]

    def in_grid(h, w):
        return (0 <= h < H) and (0 <= w < W)

    black = 0
    for h in range(H):
        for w in range(W):
            if G[h][w] == '#':
                black += 1

    li = {(0, 0)}
    count = 0

    while len(li):
        n_li = set()

        for c in li:
            h, w = c

            if h == H-1 and w == W-1:
                G[h][w] = count
                break

            if not in_grid(h, w) or G[h][w] != '.':
                continue

            G[h][w] = count

            n_li.add((h+1, w))
            n_li.add((h-1, w))
            n_li.add((h, w+1))
            n_li.add((h, w-1))

        else:
            count += 1
            li = n_li
            continue

        break

    if type(G[H-1][W-1]) != int:
        print(-1)
    else:
        print((H*W) - 1 - black - count)


if __name__ == '__main__':
    main()
