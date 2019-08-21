pre_n, city_n = map(int, input().split())
cities = [list(map(int, input().split())) for x in range(city_n)]

history = {}

A = {}

for x in sorted(cities):
    pref = str(x[0])
    if pref not in history:
        history[pref] = '1'

    A[str(x)] = '0'*(6-len(pref)) + pref + '0'*(6-len(history[pref])) + history[pref]

    history[pref] = str(int(history[pref]) + 1)

for x in cities:
    print(A[str(x)])
