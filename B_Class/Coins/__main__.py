c500 = int(input())
c100 = int(input())
c50 = int(input())
mount = int(input())

pattern = 0

for f in range(c500+1):
    for o in range(c100+1):
        for g in range(c50+1):
            if (f*500) + (o*100) + (g*50) == mount:
                pattern += 1

print(pattern)
