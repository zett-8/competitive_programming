import sys
from collections import deque, defaultdict
from heapq import heappop, heappush
sys.setrecursionlimit(20000000)
input = sys.stdin.readline


def main():
    n, limit = map(int, input().split())

    jobs = defaultdict(deque)

    for _ in range(n):
        d, v = map(int, input().split())
        jobs[d].append(v)

    money = 0
    available_jobs = []

    for d in range(1, limit+1):
        if d in jobs:
            for j in jobs[d]:
                heappush(available_jobs, -j)

        if available_jobs:
            money += -heappop(available_jobs)

    print(money)


if __name__ == '__main__':
    main()

