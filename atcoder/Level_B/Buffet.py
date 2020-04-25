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
    n = int(input())
    order = list(map(int, input().split()))
    points = list(map(int, input().split()))
    bonus = list(map(int, input().split()))
    last_one = -10
    ans = 0

    for x in order:
        if last_one == x:
            ans += bonus[last_one]

        last_one = x
        ans += points[x-1]

    print(ans)


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
3
3 1 2
2 5 4
3 6
''',
'''
14
'''
        ],
        [
'''
4
2 3 4 1
13 5 8 24
45 9 15
''',
'''
74
'''
        ],
        [
'''
2
1 2
50 50
50
''',
'''
150
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

