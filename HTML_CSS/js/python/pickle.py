import pickle
n=int(input("enter your limit"))
f=open('v.data','w')

for i in range (n):
    a=int(input("your number"))
    pickle.dump(a,f)
f.close()
f=open ('v.data','r')
for i in range (n):
    print (pickle.load(f))
