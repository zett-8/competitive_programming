import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)


def main():
    N = int(input())
    P = list(map(int, input().split()))

    ans = deque([0]*N)

    for i in range(1, N):
        pre1 = P[i-1]
        pre2 = 20000

        if i > 1:
            pre2 = P[i-2]

        if abs(P[i] - pre1) + ans[i-1] < abs(P[i] - pre2) + (ans[i-2] or 0):
            ans[i] = ans[i-1] + abs(P[i] - pre1)
        else:
            ans[i] = ans[i - 2] + abs(P[i] - pre2)

    print(ans[N-1])


if __name__ == '__main__':
    main()

