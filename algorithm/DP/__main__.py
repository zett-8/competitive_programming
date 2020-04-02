import sys
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)

"""
問、五つの数1,6,10,50,234が与えられる。
整数Nからこれらの数で引き算を繰り返して、Nを0にしたい。
また、五つの数字は何度でも用いて良い。
最小の回数を出力せよ。(1<=N<=100000)

入力
N=19
出力
4
"""


def main():

    N = int(input())

    DP = deque([N+1] * (N+1))
    DP[0] = 0

    a = (1, 6, 10, 50, 234)

    for i in range(1, N+1):
        for n in a:
            if n > i:
                break
            DP[i] = min([DP[i], DP[i - n] + 1])

    print(DP)
    print(DP[N])


if __name__ == '__main__':
    main()

