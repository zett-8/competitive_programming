# https://atcoder.jp/contests/joi2011yo/tasks/joi2011yo_d

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    N = int(input())
    Q = list(map(int, input().split(' ')))
    M = 20
    dp = [[0]*(M+1) for _ in range(N)]

    dp[1][Q[0]] = 1

    for n in range(1, N-1):
        for m in range(M+1):
            num = Q[n]
            if m-num >= 0:
                dp[n+1][m] += dp[n][m-num]
            if m+num <= M:
                dp[n+1][m] += dp[n][m+num]

    print(dp[N-1][Q[-1]])


if __name__ == '__main__':
    main()
