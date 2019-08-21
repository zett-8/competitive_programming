n = int(input())
words = [input() for x in range(n)]

A = 'Yes'

last_word = words[0][-1:]

# there is duplicated word
if len(words) != len(list(set(words))):
    A = 'No'

for i in range(1, n):
    if last_word == words[i][:1]:
        last_word = words[i][-1:]
        continue

    else:
        A = 'No'
        break

print(A)
