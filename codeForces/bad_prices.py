import sys
input = sys.stdin.readline


def main():
    n = int(input())

    for _ in range(n):
        count = 0
        min_ = 10**6+1
        d = int(input())
        nums = list(map(int, input().split()))

        for x in reversed(range(len(nums))):
            min_ = min(min_, nums[x])
            if nums[x] > min_:
                count += 1

        print(count)


if __name__ == '__main__':
    main()
