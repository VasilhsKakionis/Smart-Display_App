import collections, os, pigpio, signal, sys, time, requests

def onChange(gpio,level,tick):
   global data_level
   global data_pin
   global load_level
   global load_pin
   global q
   global shift_register
   display_input=[]

   if gpio == data_pin: # Get data level
      data_level = level
   elif gpio == load_pin: # Load Event
      if level == 1:
         display_input = list(shift_register)
         # Following line pushes data to queue. Should be changed to push data to API
		 #q.put(display_input)
		 payload = {'id':1,'data':display_input}
		 r = requests.post('http://localhost:3000',json=payload)
      else:
         pass
   else: # clock rising edge
      shift_register.appendleft(data_level)


if __name__ == '__main__':

   print("Starting pigpiod")
   try:
      os.system('sudo pigpiod')
      print("Started pigpiod")
   except:
      print("Something went wrong!")
      sys.exit()

   clock_pin=17
   data_pin=23
   load_pin=27

   shift_register_size=92
   previous_display_State=[0]*shift_register_size

   shift_register= collections.deque([0]*shift_register_size, shift_register_size)

   run = True
   while run:
      try:
         time.sleep(0.1)
         pi = pigpio.pi()
         pi.set_mode(clock_pin, pigpio.INPUT)
         pi.set_mode(data_pin, pigpio.INPUT)
         pi.set_mode(load_pin, pigpio.INPUT)
         
         run = False
      except:
         pass

   q = Queue()

   # Following call back is provided by pigpio
   cb1 = pi.callback(data_pin, pigpio.EITHER_EDGE, onChange)
   cb2 = pi.callback(clock_pin, pigpio.RISING_EDGE, onChange)
   cb3 = pi.callback(load_pin, pigpio.EITHER_EDGE, onChange)
    
   while True:
      time.sleep(1)
      
   print("EOF")
