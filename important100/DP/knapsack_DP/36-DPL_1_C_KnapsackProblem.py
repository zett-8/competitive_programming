# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=DPL_1_C&lang=ja

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    N, W = map(int, input().split(' '))
    Q = [list(map(int, input().split(' '))) for _ in range(N)]
    dp = [[0]*(W+1) for _ in range(N+1)]

    for i in range(1, N+1):
        value, weight = Q[i-1]
        for j in range(1, W+1):
            if j - weight < 0:
                dp[i][j] = max(dp[i][j], dp[i - 1][j])
            else:
                dp[i][j] = max(dp[i][j - weight] + value, dp[i - 1][j - weight] + value, dp[i - 1][j], dp[i][j])

    print(dp[N][W])


if __name__ == '__main__':
    main()
