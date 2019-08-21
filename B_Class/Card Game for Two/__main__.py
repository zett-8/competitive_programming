n = int(input())
nums = [int(x) for x in input().split()]

alice = []
bob = []

c = 2


for e in sorted(nums, reverse=True):
    if c % 2 == 0:
        alice.append(e)
    else:
        bob.append(e)
    c += 1


print(sum(alice) - sum(bob))
