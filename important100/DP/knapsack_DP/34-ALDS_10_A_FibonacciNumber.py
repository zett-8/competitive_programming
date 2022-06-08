# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_10_A&lang=ja

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    N = int(input())
    dp = [1] * max(2, (N+1))

    for i in range(2, len(dp)):
        dp[i] = dp[i-1] + dp[i-2]

    print(dp[N])


if __name__ == '__main__':
    main()
