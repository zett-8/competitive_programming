import sys
import math
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    S = list(input())
    ans = [0] * len(S)
    count = 0

    for _ in range(2):
        for i in range(len(S)):
            if S[i] == 'R':
                count += 1
            else:
                ans[i] += math.floor(count/2)
                ans[i - 1] += math.ceil(count / 2)
                count = 0

        if _ == 0:
            S.reverse()
            for i in range(len(S)):
                if S[i] == 'L':
                    S[i] = 'R'
                else:
                    S[i] = 'L'
            ans.reverse()

    ans.reverse()
    print(*ans, sep=' ')


if __name__ == '__main__':
    main()

