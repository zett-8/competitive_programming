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
    n, k = map(int, input().split())
    s = input()
    s = s + 'g'

    happiness = 0

    for i in range(len(s) - 1):
        if s[i] == s[i+1]:
            happiness += 1

    ans = []
    last_one = s[0]
    tmp = []

    for s in s:
        if s != last_one:
            ans.append(tmp)
            tmp = []

        tmp.append(s)
        last_one = s

    if len(ans) - 1 > k * 2:
        print(happiness + (k * 2))
    else:
        print(happiness + len(ans) - 1)


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
6 1
LRLRRL
''',
'''
3
'''
        ],
        [
'''
13 3
LRRLRLRRLRLLR
''',
'''
9
'''
        ],
        [
'''
10 1
LLLLLRRRRR
''',
'''
9
'''
        ],
        [
'''
9 2
RRRLRLRLL
''',
'''
7
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

