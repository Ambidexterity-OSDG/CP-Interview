# for i in range(int(input())):
#     t = int(input())
#     print(t)
# 1A
for i in range(int(input())):
    t = int(input())
    if(t%2 != 0 or t==2):
        print('NO')
    else:
        print('YES')
# 2B
# for i in range(int(input())):
#     t = input()
#     size = len(t)
#     if(size<=10):
#         print(t)
#     else:
#         print(t[0]+str(size-2)+t[size-1])

#cat input.txt | python3 file.py > output.txt
#cat input.txt | node file.js > output.txt
#jcar() { javac $1.java && java $1 && rm $1.class; }
#cat input.txt | jcar file