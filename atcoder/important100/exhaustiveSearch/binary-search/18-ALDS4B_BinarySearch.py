import sys
import builtins
import math
sys.setrecursionlimit(10**7)
builtins.input = lambda: sys.stdin.readline().strip()


def main():
    _ = int(input())
    s = list(map(int, input().split(' ')))
    s.sort()
    _ = int(input())
    t = list(map(int, input().split(' ')))
    ans = 0

    def bs(arr, x):
        l = 0
        r = len(arr)

        while l < r:
            mid = (l + r) // 2
            if arr[mid] == x:
                return mid
            elif arr[mid] < x:
                l = mid+1
            else:
                r = mid

        return -1

    for _t in t:
        if bs(s, _t) != -1:
            ans += 1

    print(ans)


if __name__ == '__main__':
    main()
