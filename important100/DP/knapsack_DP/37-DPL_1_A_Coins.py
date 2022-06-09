# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=DPL_1_A&lang=ja

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    N, M = map(int, input().split(' '))
    C = sorted(list(map(int, input().split(' '))))
    dp = [[0]*(N+1) for _ in range(M+1)]

    for i in range(N+1):
        dp[1][i] = i

    for i in range(2, M+1):
        value = C[i-1]
        for j in range(1, N+1):
            if j - value < 0:
                dp[i][j] = dp[i-1][j]
            else:
                dp[i][j] = min(dp[i-1][j], dp[i][j-value] + 1, dp[i-1][j-value] + 1)

    print(dp[M][N])


if __name__ == '__main__':
    main()
