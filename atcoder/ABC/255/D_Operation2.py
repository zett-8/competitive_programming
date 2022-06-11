# https://atcoder.jp/contests/abc255/tasks/abc255_d

import sys
import builtins
import math
import bisect
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    N, Q = map(int, input().split(' '))
    A = sorted(list(map(int, input().split(' '))))
    QL = [int(input()) for _ in range(Q)]

    mx = max(A)
    mn = min(A)

    agr_sum = [0] * N
    cost_til_mx = 0
    cost_til_mn = 0

    for i in range(N):
        cost_til_mx += abs(A[i] - mx)
        cost_til_mn += abs(A[i] - mn)
        agr_sum[i] = A[i]
        if i != 0:
            agr_sum[i] += agr_sum[i-1]

    for q in QL:
        if mx <= q:
            print(((q-mx)*N) + cost_til_mx)
        elif mn < q < mx:
            idx = bisect.bisect_right(A, q)
            l = (idx*q) - agr_sum[idx-1]
            r = (agr_sum[-1] - agr_sum[idx-1]) - (N-idx)*q
            print(l+r)

        elif q <= mn:
            print(((mn-q)*N) + cost_til_mn)


if __name__ == '__main__':
    main()
