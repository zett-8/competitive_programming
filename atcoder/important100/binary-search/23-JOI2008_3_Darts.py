# https://atcoder.jp/contests/joi2008ho/tasks/joi2008ho_c

import sys
import builtins
import math
import bisect
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    n, limit = map(int, input().split(' '))
    p = [int(input()) for _ in range(n)] + [0]
    last_shot = set()

    [last_shot.add(i+j) for i in p for j in p]

    last_shot = sorted(list(last_shot))

    ans = 0
    for one in p:
        for two in p:
            r = limit - (one+two)
            if r < 0:
                continue
            i = bisect.bisect_right(last_shot, r)
            ans = max(ans, one + two + last_shot[i-1])

    print(ans)


if __name__ == '__main__':
    main()
