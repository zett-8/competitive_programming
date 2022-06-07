# https://atcoder.jp/contests/arc054/tasks/arc054_b

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    p = float(input())
    ans = p
    lv = 10**5

    for e in range(100*lv):
        improve = 2 ** ((e/lv) / 1.5)
        ans = min(ans, (e/lv) + (p/improve))

    print(ans)


if __name__ == '__main__':
    main()
