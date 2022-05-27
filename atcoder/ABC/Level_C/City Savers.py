import sys
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    N = int(input())
    monsters = list(map(int, input().split()))
    heroes = list(map(int, input().split()))

    defeated = 0

    for i in reversed(range(len(heroes))):
        if heroes[i] == 0:
            continue

        for _ in [1, 0]:
            if monsters[i+_] >= heroes[i]:
                defeated += heroes[i]
                monsters[i+_] -= heroes[i]
                heroes[i] = 0
            elif monsters[i+_] < heroes[i]:
                defeated += monsters[i+_]
                heroes[i] -= monsters[i+_]
                monsters[i+_] = 0

    print(defeated)


if __name__ == '__main__':
    main()

