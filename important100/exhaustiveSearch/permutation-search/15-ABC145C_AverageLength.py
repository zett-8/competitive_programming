# https://atcoder.jp/contests/abc145/tasks/abc145_c

import sys
import builtins
from itertools import permutations
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    n = int(input())
    c = [tuple(map(int, input().split(' '))) for _ in range(n)]

    _sum = 0
    count = 0

    for o in permutations(range(n), n):
        count += 1
        for i in range(len(o)-1):
            a = c[o[i]]
            b = c[o[i+1]]
            _sum += math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2)

    print(_sum / count)


if __name__ == '__main__':
    main()
