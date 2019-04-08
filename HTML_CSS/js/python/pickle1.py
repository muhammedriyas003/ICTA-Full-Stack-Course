import pickle
n=int(input("enter your limit"))
f = open('v.dat','w')

for i in range (n):
    a=int(input("your number"))
    pickle.dump(a,f)
f.close()
f = open('v.dat','r')
for i in range (n):
    print (pickle.load(f))
