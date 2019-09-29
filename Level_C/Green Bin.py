import sys
from collections import deque
sys.setrecursionlimit(20000000)


def main():

    n = int(input())
    dic = {}
    for _ in range(n):
        t = ''.join(sorted(list(input())))
        if t in dic:
            dic[t] += 1
        else:
            dic[t] = 0

    def pattern(num):
        tmp = 0

        for i in range(1, num+1):
            tmp += i
        return tmp

    ans = 0
    for d in dic:
        if dic[d]:
            ans += pattern(dic[d])

    print(ans)


if __name__ == '__main__':
    main()

