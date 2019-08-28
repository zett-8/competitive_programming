import sys
import math
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    L, R = map(int, input().split())

    ans = 200000000

    for a in range(L, R+1):
        for b in range(a+1, R+1):
            if a * b % 2019 < ans:
                ans = a * b % 2019
                if ans == 0:
                    print(ans)
                    sys.exit()

    print(ans)


if __name__ == '__main__':
    main()

