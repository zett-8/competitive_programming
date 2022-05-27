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
    n = int(input())
    s = list(map(int, input().split()))
    ans = []

    s = list(sorted(s, reverse=True))

    ans.append(s.pop(0))

    while len(s):

        tmp = []
        for parent in ans:
            for i in range(len(s)):
                if parent > s[i]:
                    child = s.pop(i)
                    tmp.append(child)
                    break
            else:
                print('No')
                sys.exit()

        ans = ans + tmp

    print('Yes')


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
2
4 2 3 1
''',
'''
Yes
'''
        ],
        [
'''
2
1 2 3 1
''',
'''
Yes
'''
        ],
        [
'''
1
1 1
''',
'''
No
'''
        ],
        [
'''
5
4 3 5 3 1 2 7 8 7 4 6 3 7 2 3 6 2 7 3 2 6 7 3 4 6 7 3 4 2 5 2 3
''',
'''
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

