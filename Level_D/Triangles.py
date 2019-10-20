import subprocess
import os
import time


import sys
import bisect
import math
from copy import deepcopy
from collections import deque, defaultdict
from operator import mul
from functools import reduce, reduce
sys.setrecursionlimit(20000000)

input = sys.stdin.readline


def main():
    N = int(input())
    L = list(map(int, input().split()))
    L.sort()

    ans = 0

    for a in range(N):

        for b in range(a+1, N-1):
            ab = L[a] + L[b]
            i = bisect.bisect_left(L, ab) - 1

            ans += i - b

    print(ans)


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
4
3 4 2 1
''',
'''
1
'''
        ],
        [
'''
3
1 1000 1
''',
'''
0
'''
        ],
        [
'''
7
218 786 704 233 645 728 389
''',
'''
23
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

