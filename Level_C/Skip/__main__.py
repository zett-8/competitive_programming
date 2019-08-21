import fractions

n, x = map(int, input().split())
cities = [int(x) for x in input().split()]
cities.append(x)
cities = sorted(cities)

gaps = []

for c in range(len(cities)-1):
    gaps.append(cities[c+1] - cities[c])

A = 0

for g in sorted(gaps):
    A = fractions.gcd(A, g)

print(A)

