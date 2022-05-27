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


mod = 10**9+7
N = 10**6
g1 = [1, 1]
g2 = [1, 1]
inverse = [0, 1]


def cmb(n, r):
    if r < 0 or r > n:
        return 0
    r = min(r, n-r)

    return g1[n] * g2[r] * g2[n-r] % mod


def main():
    for i in range(2, N + 1):
        g1.append((g1[-1] * i) % mod)
        inverse.append((-inverse[mod % i] * (mod // i)) % mod)
        g2.append((g2[-1] * inverse[-1]) % mod)

    x, y = map(int, input().split())

    if (x+y) % 3:
        print(0)
        sys.exit()

    n = int(((x*2 - y) // 3))
    m = int(((y*2 - x) // 3))

    print(cmb(n+m, n))


if __name__ == '__main__':
    main()


def test():
    test_cases = [
        [
'''
3 3
''',
'''
2
'''
        ],
        [
'''
2 2
''',
'''
0
'''
        ],
        [
'''
999999 999999
''',
'''
151840682
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

