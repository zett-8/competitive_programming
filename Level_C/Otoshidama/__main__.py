num, amount = map(int, input().split())

A = '{a} {b} {c}'.format(a=-1, b=-1, c=-1)

try:
    for _1k in range(num+1):
        for _5k in range(num+1 - _1k):
            _10k = num - _1k - _5k
            if (_10k*10000 + _5k*5000 + _1k*1000 == amount) and (_10k + _5k + _1k == num):
                A = '{a} {b} {c}'.format(a=_10k, b=_5k, c=_1k)
                raise Exception

except Exception:
    pass

print(A)
