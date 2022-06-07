# https://atcoder.jp/contests/abc122/tasks/abc122_b

def main():
    s = input()
    ans = 0

    for i in range(len(s)):
        count = 0
        while i < len(s) and s[i] in 'ACGT':
            count += 1
            i += 1

        ans = max(ans, count)

    print(ans)

if __name__ == '__main__':
    main()
