import requests
import json
import random
import numpy as np
import time

count = 1
while(True):

	if((count%2)==0):
		test = [True,True,True,True,True,True,True,True,True,
				True,True,False,False,False,False,False,False,
				True,True,True,False,False,False,False,False,
				False,False,False,False,False,False,False,False,
				True,True,True,True,
				True,True,True,True,True,True,True,
				True,True,False,True,True,True,True,
				True,True,True,True,True,True,False,
				True,True,True,False,True,True,True,
				True,False,True,False,True,True,True,
				True,
				True,True,True,True,
				True,True,True,True,
				True,True,True,True,
				True,True,True,True
				]
	else:
		test = [True,True,True,True,True,True,True,True,True,
				True,True,False,False,False,False,False,False,
				True,True,True,False,False,False,False,False,
				False,False,False,False,False,False,False,False,
				True,True,True,True,
				True,True,True,True,True,True,True,
				True,True,False,True,True,True,True,
				True,True,True,True,True,True,False,
				True,True,True,False,True,True,True,
				True,False,True,False,True,True,True,
				True,
				False,True,True,True,
				True,False,True,True,
				True,True,False,True,
				True,True,True,False
				]

	#a = np.random.choice(test,size=96)
	#b=test.tolist()
	help1 = {'data':test}	

	r = requests.post('http://localhost:3000/raw-data',json=help1)

	#print(r.text)

	#r = requests.get('http:/localhost:3000/data')
	#print(r.headers)
	count+=1
	time.sleep(0.9)




