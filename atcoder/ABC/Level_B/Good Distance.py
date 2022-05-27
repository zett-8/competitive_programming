import sys
import math
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    N, D = map(int, input().split())
    P = [list(map(int, input().split())) for _ in range(N)]

    count = 0

    def diff(a, b):
        sm = 0
        for i in range(D):
            sm += ((a[i] - b[i]) ** 2)

        return sm

    for p in range(len(P) - 1):
        s = 0
        for x in range(p+1, len(P)):
            s = diff(P[p], P[x])

            if str(s**0.5)[-1] == '0':
                count += 1

    print(count)


if __name__ == '__main__':
    main()

