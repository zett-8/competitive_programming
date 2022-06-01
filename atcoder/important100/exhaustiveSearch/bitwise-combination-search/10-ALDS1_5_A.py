# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_5_A&lang=ja

import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline


def main():
    n = int(input())
    q = list(map(int, input().split(' ')))
    _ = int(input())
    c = list(map(int, input().split(' ')))

    p = set()

    for i in range(2**n):
        num = 0
        for j in range(n):
            num += q[j] if i & 1 << j else 0
        p.add(num)

    for _c in c:
        print('yes' if _c in p else 'no')

    sys.exit(0)


if __name__ == '__main__':
    main()
