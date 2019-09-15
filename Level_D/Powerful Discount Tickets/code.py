import subprocess
import os
import time


import sys
import math
from copy import deepcopy
from collections import deque, defaultdict
from heapq import heappush, heappop
from operator import mul
from functools import reduce
sys.setrecursionlimit(20000000)

input = sys.stdin.readline


def main():
    N, M = map(int, input().split())
    stuff = []
    for x in input().split():
        heappush(stuff, -int(x))

    for i in range(M):
        heappush(stuff, -math.floor(-heappop(stuff) / 2))

    print(-sum(stuff))


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
3 3
2 13 8
''',
'''
9
'''
        ],
        [
'''
4 4
1 9 3 5
''',
'''
6
'''
        ],
        [
'''
1 100000
1000000000
''',
'''
0
'''
        ],
        [
'''
10 1
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
''',
'''
9500000000
'''
        ],
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

