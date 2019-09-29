N = int(input())
nums = [int(x) for x in input().split()]

count = 0


def all_even(arr):
    for n in arr:
        if int(n) % 2 == 1:
            return False
    return True


while all_even(nums):
    for x in range(len(nums)):
        nums[x] = nums[x] / 2
    count += 1


print(count)
