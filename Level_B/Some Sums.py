num, min_, max_ = map(int, input().split())

available_n = []

for n in range(num+1):
    sm = 0
    for x in list(str(n)):
        sm += int(x)

    if max_ >= sm >= min_:
        available_n.append(n)

print(sum(available_n))
