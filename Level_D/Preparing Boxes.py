import sys
import math
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    N = int(input())
    boxes = [0] * (N+1)
    ans_boxes = [0]
    [ans_boxes.append(x) for x in list(map(int, input().split()))]

    count = 0
    ans = []

    def judge(n):
        s = 0

        nn = n
        while nn < len(boxes):
            s += boxes[nn]
            nn += n

        if s % 2 == ans_boxes[i]:
            return True
        else:
            return False

    for i in reversed(range(1, len(boxes))):
        if judge(i):
            continue

        else:
            count += 1
            ans.append(i)
            boxes[i] += 1
            if judge(i):
                pass
            else:
                print(-1)
                sys.exit()

    print(count)
    if ans:
        print(*ans, sep=' ')


if __name__ == '__main__':
    main()

