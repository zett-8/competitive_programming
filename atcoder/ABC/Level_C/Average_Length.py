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
    coordinates = []

    for i in range(n):
        coordinates.append(list(map(int, input().split())))

    count = 0

    for x in range(n):
        for y in range(x+1, n):
            xg = (coordinates[x][0] - coordinates[y][0])**2
            yg = (coordinates[x][1] - coordinates[y][1])**2
            count += math.sqrt(xg+yg)

    r_avg = count / (n**2/2)

    print(r_avg * n)


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
3
0 0
1 0
0 1
''',
'''
2.2761423749
'''
        ],
        [
'''
2
-879 981
-866 890
''',
'''
91.9238815543
'''
        ],
        [
'''
8
-406 10
512 859
494 362
-955 -475
128 553
-986 -885
763 77
449 310
''',
'''
7641.9817824387
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

