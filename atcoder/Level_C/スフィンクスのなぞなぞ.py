import sys
import math
from copy import deepcopy
from collections import deque
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)


def main():
    N, M = map(int, input().split())

    for c in range(N+1):
        a = -M + 3*N + c
        b = M - 2*N - 2*c

        if a >= 0 and b >= 0:
            print(a, b, c)
            sys.exit()

    print(-1, -1, -1)


if __name__ == '__main__':
    main()

