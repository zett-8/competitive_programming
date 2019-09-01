import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

input = sys.stdin.readline


def main():
    N = int(input())
    players = []
    for i in range(N):
        pl = deque(map(int, input().split()))
        for x in range(len(pl)):
            pl[x] = pl[x] - 1
        players.append(pl)

    max_match = int(N * (N-1) / 2)
    match_count = 0
    days = 0

    for i in range(max_match):
        played = deque()
        no_match = True

        for p in range(len(players)):
            main_p = p

            if main_p in played:
                continue

            if players[main_p]:
                opponent = players[main_p][0]

                if opponent in played or len(players[opponent]) == 0:
                    continue

                if main_p == players[opponent][0]:
                    no_match = False
                    played.append(players[main_p].popleft())
                    played.append(players[opponent].popleft())
                    match_count += 1

                    if match_count == max_match:
                        print(days + 1)
                        sys.exit()

        if no_match:
            print(-1)
            sys.exit()

        days += 1

    if days:
        print(days)
    else:
        print(-1)


if __name__ == '__main__':
    main()
