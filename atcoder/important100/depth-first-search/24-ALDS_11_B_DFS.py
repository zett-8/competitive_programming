# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_11_B&lang=ja

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    n = int(input())
    g = [None] * n

    d = [math.inf] * n
    f = [math.inf] * n

    for _ in range(n):
        i, node_n, *nodes = list(map(int, input().split(' ')))
        g[i-1] = [x-1 for x in nodes]

    def rc(idx, tick):
        d[idx] = min(d[idx], tick)

        last_tick = tick
        for node in g[idx]:
            if d[node] != math.inf:
                continue
            last_tick = rc(node, last_tick+1)

        f[idx] = last_tick+1

        return last_tick+1

    last_tick = 0
    while math.inf in d:
        for i in range(n):
            if d[i] == math.inf:
                last_tick = rc(i, last_tick+1)
                break

    for i in range(n):
        print(' '.join(map(str, [i+1, d[i], f[i]])))


if __name__ == '__main__':
    main()
