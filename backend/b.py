import json
import requests
headers = {'Accept': 'application/json'}
r = requests.get('http://atman-iot.com:3000/ping', params= {},headers = headers)
print(r.json())
#path = '.'
#filename = 'data'
#display = {}
#for i in range(3):
#    display[str(i)] = i+1
#filePathName = path+'/'+filename+'.json'
#with open(filePathName,'w') as fp:
#    json.dump(display,fp)
