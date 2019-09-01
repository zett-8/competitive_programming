import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline


def main():
    n = int(input()) - 1
    ans = 0

    if n % 2:
        print((1 + n) * (n // 2) + (n // 2 + 1))

    else:
        print((1 + n) * (n // 2))


if __name__ == '__main__':
    main()
