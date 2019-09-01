import subprocess
import os
import time


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


def test():
    test_cases = [
        [
'''
3
2 3
1 3
1 2
''',
'''
3
'''
        ],
        [
'''
4
2 3 4
1 3 4
4 1 2
3 1 2
''',
'''
4
'''
        ],
        [
'''
3
2 3
3 1
1 2
''',
'''
-1
'''
        ],
#         [
# '''
# input4
# ''',
# '''
# output4
# '''
#         ],
    ]

    wrong = 0

    for i in range(len(test_cases)):
        input_ = test_cases[i][0]
        expect = test_cases[i][1].lstrip()

        f = open('testcase', 'w', encoding='utf-8')
        f.write(input_.lstrip())
        f = open('testcase', 'r')

        print('============ test case' + str(i+1) + ' ===========')
        print('input:')
        print(input_.lstrip())

        print('expect:')
        print(expect)

        print('output:')
        start = time.time()
        result = subprocess.check_output(['python', '.'], stdin=f)
        end = str(time.time() - start)
        print(result.decode('utf-8'))

        if expect == str(result.decode('utf-8')):
            print('\033[32m' + 'SUCCESS!' + '\033[0m', 'time =', end[0: 5] + 's')
        else:
            wrong += 1
            print('\033[31m' + 'SOMETHING IS WRONG...' + '\033[0m')

        print('===================================')
        print(' ')

        f.close()

        os.remove('testcase')

    if not wrong:
        print('\033[32m' + 'ALL CLEAR!!!' + '\033[0m')

