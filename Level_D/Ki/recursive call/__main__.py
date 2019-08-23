import sys
from collections import deque
sys.setrecursionlimit(20000000)
input = sys.stdin.readline


def main():
    N, Q = map(int, input().split())
    ans = [[0, deque()] for _ in range(N)]

    for _ in range(N - 1):
        p, c = map(int, input().split())
        ans[p-1][1].append(c-1)
        ans[c-1][1].append(p-1)

    for _ in range(Q):
        p, v = map(int, input().split())
        ans[p-1][0] += v

    def add_value(node, parent):
        val = ans[node][0]
        children = ans[node][1]
        for child in children:
            if child == parent:
                continue
            ans[child][0] += val
            add_value(child, node)

    add_value(0, -1)

    print(' '.join([str(x[0]) for x in ans]))


if __name__ == '__main__':
    main()

