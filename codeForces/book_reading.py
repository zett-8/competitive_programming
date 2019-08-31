import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

input = sys.stdin.readline


def main():
    q = int(input())

    for _ in range(q):
        n, m = map(int, input().split())
        nums = n // m

        set = nums // 10

        nums = nums - (set * 10)

        m = int(str(m)[-1])

        print(add_first_nums(m, nums) + add_first_nums(m, 10) * set)


def add_first_nums(s, t):
    sm = 0
    tmp = s
    for _ in range(t):
        sm += tmp
        tmp += s
        tmp = int(str(tmp)[-1])
    return sm


if __name__ == '__main__':
    main()
