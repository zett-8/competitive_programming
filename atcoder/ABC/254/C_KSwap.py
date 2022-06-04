# https://atcoder.jp/contests/abc254/tasks/abc254_c

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    n, k = map(int, input().split(' '))
    q = list(map(int, input().split(' ')))
    ans = sorted(q)

    for i in range(0, min(n-k, k)):
        nums = []
        idx_list = []
        for x in range(i, n, k):
            idx_list.append(x)
            nums.append(q[x])
        nums.sort()

        for _i, idx in enumerate(idx_list):
            q[idx] = nums[_i]

    print('Yes' if ans == q else 'No')


if __name__ == '__main__':
    main()
