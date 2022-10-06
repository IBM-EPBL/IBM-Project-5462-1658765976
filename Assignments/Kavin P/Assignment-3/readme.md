import RPi.GPIO as GPIO 
import time
 
ledPin = 17
 
def setup():
        GPIO.setmode(GPIO.BOARD)       # Numbering of Pins
        GPIO.setup(ledPin, GPIO.OUT)   # Set ledPin as output
        GPIO.output(ledPin, GPIO.LOW)  # Set ledPin to LOW to turn Off the LED
 
def loop():
        while True:
                print 'LED on'
                GPIO.output(ledPin, GPIO.HIGH)   # LED On
                time.sleep(3.0)                  # wait 3 sec
                print 'LED off'
                GPIO.output(ledPin, GPIO.LOW)   # LED Off
                time.sleep(3.0)                 # wait 3 sec
def endprogram():
 
        GPIO.output(ledPin, GPIO.LOW)     # LED Off
        GPIO.cleanup()                    

if __name__ == '__main__':         
        setup()
        try:
                loop()
        except KeyboardInterrupt:  #'Ctrl+C' is pressed, the destroy() will be  executed.
                endprogram()
