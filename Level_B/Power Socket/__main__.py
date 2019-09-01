import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline


def main():
    n, m = map(int, input().split())

    consent = 1
    count = 0
    while consent < m:
        consent += n - 1
        count += 1

    print(count)


if __name__ == '__main__':
    main()
