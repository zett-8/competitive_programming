_temp = open('template.py', 'r')
temp = _temp.read()
_temp.close()

code = open('code.py', 'w', encoding='utf-8')
code.write(temp)

print(' === Reset code.py === ')
