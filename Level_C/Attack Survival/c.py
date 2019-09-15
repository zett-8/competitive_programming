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

# input = sys.stdin.readline


def main():
    n, k, q = map(int, input().split())

    winners = []
    for w in range(q):
        winners.append(int(input()))

    score = [k - q] * n

    for w in winners:
        winner = w - 1

        score[winner] += 1

    for s in score:
        if s > 0:
            print('Yes')
        else:
            print('No')


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
6 3 4
3
1
3
2
''',
'''
No
No
Yes
No
No
No
'''
        ],
        [
'''
6 5 4
3
1
3
2
''',
'''
Yes
Yes
Yes
Yes
Yes
Yes
'''
        ],
        [
'''
10 13 15
3
1
4
1
5
9
2
6
5
3
5
8
9
7
9
''',
'''
No
No
No
No
Yes
No
No
No
Yes
No
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

