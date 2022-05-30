# https://atcoder.jp/contests/abc106/tasks/abc106_b?

def main():
    n = int(input())
    ans = 0

    for i in range(1, n+1, 2):
        f = 0
        for x in range(1, i+1):
            if i % x == 0:
                f += 1

        if f == 8:
            ans += 1

    print(ans)
