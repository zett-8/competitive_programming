# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_10_C&lang=ja

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    def lcs(x, y):
        dp = [[0]*(len(x)+1) for _ in range(len(y)+1)]

        for i, a in enumerate(y):
            for j, b in enumerate(x):
                if a == b:
                    dp[i+1][j+1] = dp[i][j] + 1
                else:
                    dp[i+1][j+1] = max(dp[i+1][j], dp[i][j+1])

        return dp[len(y)][len(x)]

    for _ in range(int(input())):
        print(lcs(list(input()), list(input())))


if __name__ == '__main__':
    main()
