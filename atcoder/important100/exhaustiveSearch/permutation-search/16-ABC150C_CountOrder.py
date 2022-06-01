# https://atcoder.jp/contests/abc150/tasks/abc150_c

import sys
import builtins
from itertools import permutations
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    n = int(input())
    p = tuple(map(int, input().split(' ')))
    q = tuple(map(int, input().split(' ')))

    x = tuple(permutations(range(1, n+1), n))

    print(abs(x.index(p) - x.index(q)))


if __name__ == '__main__':
    main()
