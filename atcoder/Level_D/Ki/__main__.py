import sys
from collections import deque
sys.setrecursionlimit(10 ** 5)
input = sys.stdin.readline


def main():
    N, Q = map(int, input().split())
    ans = [0] * N
    con = [deque() for _ in range(N)]

    for _ in range(N - 1):
        p, c = map(int, input().split())
        con[p-1].append(c-1)
        con[c-1].append(p-1)

    for _ in range(Q):
        p, v = map(int, input().split())
        ans[p-1] += v

    stacks = deque()
    stacks.append((0, -1))

    while stacks:
        stack = stacks.pop()
        node, parent = stack[0], stack[1]

        children = con[node]
        for child in children:
            if child == parent:
                continue
            ans[child] += ans[node]
            stacks.append((child, node))

    print(*ans)


if __name__ == '__main__':
    main()
