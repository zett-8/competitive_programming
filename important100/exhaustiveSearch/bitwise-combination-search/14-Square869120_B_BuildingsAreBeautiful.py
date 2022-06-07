# https://atcoder.jp/contests/s8pc-4/tasks/s8pc_4_b

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    n, k = map(int, input().split(' '))
    b = list(map(int, input().split(' ')))

    ans = math.inf

    for i in range(2**n):
        if bin(i)[2:].count('1') != k:
            continue

        selected = []
        for j in range(n):
            if i & 1 << j:
                selected.append(j)

        highest = 0
        cost = 0

        for bi, _b in enumerate(b):
            if bi in selected and highest >= _b:
                c = highest - _b + 1
                cost += c
                highest = _b + c
            else:
                highest = max(highest, _b)

        ans = min(ans, cost)

    print(ans)


if __name__ == '__main__':
    main()
