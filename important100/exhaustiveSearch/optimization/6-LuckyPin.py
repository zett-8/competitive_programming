# https://atcoder.jp/contests/sumitrust2019/tasks/sumitb2019_d

import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline


def main():
    _ = int(input())
    s = input()
    ans = 0

    for i in range(0, 10):
        c1 = s.find(str(i))
        if c1 == -1:
            continue
        for j in range(0, 10):
            c2 = s[c1+1:].find(str(j))
            if c2 == -1:
                continue
            for k in range(0, 10):
                if s[c1+1:][c2+1:].find(str(k)) != -1:
                    ans += 1

    print(ans)


if __name__ == '__main__':
    main()
