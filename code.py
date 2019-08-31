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
    q = int(input())

    for _ in range(q):
        n, m = map(int, input().split())
        nums = n // m

        set = nums // 10

        nums = nums - (set * 10)

        m = int(str(m)[-1])

        print(add_first_nums(m, nums) + add_first_nums(m, 10) * set)


def add_first_nums(s, t):
    sm = 0
    tmp = s
    for _ in range(t):
        sm += tmp
        tmp += s
        tmp = int(str(tmp)[-1])
    return sm


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
7
1 1
10 1
100 3
1024 14
998244353 1337
123 144
1234312817382646 13
''',
'''
1
45
153
294
3359835
0
427262129093995
'''
        ],
#         [
# '''
# input2
# ''',
# '''
# output2
# '''
#         ],
#         [
# '''
# input3
# ''',
# '''
# output3
# '''
#         ],
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

