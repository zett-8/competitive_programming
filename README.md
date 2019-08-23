# Python tips for competitive programming

## Input & Output
#### Multiple inputs on a line
```python
2 4 5 7
```
```python
a, b, c, d = map(int, input().split())
# a=2 b=4 c=5 d =7

a = list(map(int, input().split()))
# a = [2, 4, 5, 6] 
```
#### Input on multiple lines
```python
3  # n number of A
22 # A1 
14 # A2
45 # A3
```
```python
n = int(input()) 
t = [int(input()) for _ in range(n)] 
```

#### Multiple inputs on multiple line
```python
4
22 1 45
25 53 110
4 444 555
2 5 0
```
```python
n = int(input())
e = [list(map(int, input().split())) for x in range(n)] 
#  [[22, 1, 45], [25, 53, 110], [4, 444, 555], [2, 5, 0]]
```
## Speeding Up
#### Don't use 'del', 'insert'
#### Use 'tuple'
#### 'sort()' is bit faster than 'sorted()'
#### Put smaller loop in outside
```python
for i in range(n):
    for j in range(2):
        a += 1
        
# 5286 ms
```
```python
for i in range(2):
    for j in range(n):
        a += 1 
        
# 1923ms
```
####Excute as main function
```python
def main():
    """"write here"""

if __name__ == '__main__':
    main()
```


#### Use readline input

You can use 'input' as default 'input'
```python
import sys
input = sys.stdin.readline
```
```python
# input()
N = int(input())
A = [int(input()) for _ in range(N)]

# 392.40ms
```

```python
# sys.stdin.readline()
import sys
input = sys.stdin.readline

N = int(input())
A = [int(input()) for _ in range(N)]

# 37.09ms
```
Bud be carefull when you get string. It also includes /n at the end'
```python
s = list(input()) #abc

print(s) #['a', 'b', 'c', '\n']
```

## Should I use PyPY ?
#### should use Python
- Recursive call
- Defaultdict
- String operation
- Deque
- List comprehension

####  should use PyPY
- 10^7 queue
- Busy operation with 2D array
- Tree problems
- Graph problems
## quotation
- [AtCoderで使ってる入力メソッド(Python3)](https://qiita.com/fmhr/items/77fc453e2fb1bc02e392)
- [AtCoder コンテストについての tips](https://qiita.com/drken/items/8a6f139158cde8a61dce)
- [Python 競技プログラミング高速化tips (PythonでAtcoderをやる際に個人的に気を付けてること)](https://juppy.hatenablog.com/entry/2019/06/14/Python_%E7%AB%B6%E6%8A%80%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E9%AB%98%E9%80%9F%E5%8C%96tips_%28Python%E3%81%A7Atcoder%E3%82%92%E3%82%84%E3%82%8B%E9%9A%9B%E3%81%AB%E5%80%8B)
- [Pythonの知っておくと良い細かい処理速度の違い8個](https://www.kumilog.net/entry/python-speed-comp)
