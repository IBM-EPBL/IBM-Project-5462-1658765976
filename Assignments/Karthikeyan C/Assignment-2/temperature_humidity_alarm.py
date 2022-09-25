import random

def alarm(message):
    print(message)
    
def get_temperature():
    return random.randint(1, 100) # returns temperature in celsius
    
def get_humidity():
    return random.randint(20, 100) # returns humidity in percentage
    
def monitor():
    while True:
        temperature = get_temperature()
        humidity = get_humidity()
        if temperature > 40:
            alarm("Temperature is High")
        elif temperature < 25:
            alarm("Temperature is Low")
        else:
            print("Normal Temperature")
        if humidity > 50:
            alarm("Humidity is High")
        elif humidity < 30:
            alarm("Humidity is Low")
        else:
            print("Normal Humidity")
            
if __name__ == "__main__":
    monitor()