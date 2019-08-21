s = input()

a = 'dream'
b = 'dreamer'
c = 'erase'
d = 'eraser'

while s is not '':
    if s[-7:] == b:
        s = s[:-7]
        continue

    elif s[-5:] == a:
        s = s[:-5]
        continue

    elif s[-6:] == d:
        s = s[:-6]
        continue

    elif s[-5:] == c:
        s = s[:-5]
        continue

    else:
        break


if s is '':
    print('YES')
else:
    print('NO')
