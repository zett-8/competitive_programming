# https://atcoder.jp/contests/abc002/tasks/abc002_4?lang=ja

import sys
import math
sys.setrecursionlimit(20000000)

# input = sys.stdin.readline


def main():
    n, m = map(int, input().split(' '))
    q = [tuple(map(int, input().split(' '))) for _ in range(m)]
    ans = 0

    for i in range(2**n):
        for a in range(n-1):
            for b in range(a+1, n):
                if i & 1 << a and i & 1 << b and (not (a+1, b+1) in q):
                    break
            else:
                continue

            break
        else:
            ans = max(ans, bin(i).count('1'))

    print(ans)


if __name__ == '__main__':
    main()
