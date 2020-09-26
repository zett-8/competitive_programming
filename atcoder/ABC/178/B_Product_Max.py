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
    a, b, c, d = map(int, input().split())

    print(max(a*c, a*d, b*c, b*d))


if __name__ == '__main__':
    main()
