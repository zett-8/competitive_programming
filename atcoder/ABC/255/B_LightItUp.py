# https://atcoder.jp/contests/abc255/tasks/abc255_b

import sys
import builtins
import math

sys.setrecursionlimit(10 ** 7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    N, K = map(int, input().split(' '))
    A = list(map(lambda x: int(x) - 1, input().split(' ')))
    C = [list(map(int, input().split(' '))) for _ in range(N)]

    distance = [math.inf] * N

    for i in A:
        distance[i] = 0
        x1, y1 = C[i]
        for j in range(N):
            x2, y2 = C[j]
            distance[j] = min(distance[j], math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2))

    print(max(distance))


if __name__ == '__main__':
    main()
