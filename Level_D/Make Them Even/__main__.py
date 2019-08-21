height, width = map(int, input().split())
F = [list(map(int, input().split())) for n in range(height)]

A = []
count = 0


def next_box(h_, w_, wid):
    if w_+1 == wid:
        return h_ + 1, w_

    return h_, w_ + 1


for h in range(height):
    for w in range(width):
        # last one
        if h+1 == height and w+1 == width:
            break
        # even num
        elif F[h][w] % 2 == 0:
            pass
        # odd num
        else:
            n_h, n_w = next_box(h, w, width)
            F[h][w] -= 1
            F[n_h][n_w] += 1

            A.append([h+1, w+1, n_h+1, n_w+1])
            count += 1


print(count)
for a in A:
    print(*a, sep=' ')

