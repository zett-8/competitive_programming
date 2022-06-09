# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_10_C&lang=ja

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    def lcs(x, y):
        dp = [[0]*(len(x)+1) for _ in range(len(y)+1)]

        for i in range(1, len(y)+1):
            for j in range(1, len(x)+1):
                if y[i] == x[j]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] = max(dp[i][j-1], dp[i-1][j])

        return dp[len(y)][len(x)]

    for _ in range(int(input())):
        print(lcs(list(input()), list(input())))


if __name__ == '__main__':
    main()
