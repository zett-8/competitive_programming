import sys
from collections import deque
sys.setrecursionlimit(20000000)
input = sys.stdin.readline


def main():
    n = int(input())

    a = 0
    for x in range(1, n+1):
        if len(str(x)) % 2 == 1:
            a += 1

    print(a)


if __name__ == '__main__':
    main()

