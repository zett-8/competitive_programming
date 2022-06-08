# https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_11_C&lang=ja

import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    n = int(input())
    nodes = [[] for _ in range(n)]
    n_id = [-1] * n
    for _ in range(n):
        i, c, *nd = list(map(int, input().split()))
        for _nd in nd:
            nodes[i-1].append(_nd-1)

    count = 0
    li = [0]

    while len(li):
        next_li = []
        for l in li:
            if n_id[l] != -1:
                continue
            n_id[l] = count
            next_li += nodes[l]

        li = next_li
        count += 1

    for i in range(n):
        print(i+1, n_id[i])


if __name__ == '__main__':
    main()
