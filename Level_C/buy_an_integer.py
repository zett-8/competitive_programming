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
    A, B, X = map(int, input().split())

    max = 0
    n = 1
    while n < 10 ** 9 + 1:
        calc = (A * n) + (B * len(str(n)))
        if X >= calc and n > max:
            max = n
            n = n + 1

            if X >= (A * (n+10000) + (B * len(str(n+10000)))) and n < 10 ** 9 - 10001:
                n = n + 10000
                continue

            if X >= (A * (n+1000) + (B * len(str(n+1000)))) and n < 10 ** 9 - 1001:
                n = n + 1000
                continue

            if X >= (A * (n+100) + (B * len(str(n+100)))) and n < 10 ** 9 - 101:
                n += 100
                continue

        else:
            break

    print(max)


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
10 7 100
''',
'''
9
'''
        ],
        [
'''
2 1 100000000000
''',
'''
1000000000
'''
        ],
        [
'''
1000000000 1000000000 100
''',
'''
0
'''
        ],
        [
'''
1234 56789 314159265
''',
'''
254309
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

