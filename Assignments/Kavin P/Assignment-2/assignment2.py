import random

def alert(msg):
    print(msg)

def read_humidity():
    return random.randint(10, 100)

def read_temperature():
    return random.randint(-100, 100)
    
def start_monitoring():
    while True:
        temperature = read_temperature()
        humidity = read_humidity()
        if temperature >= 40:
            alert("Temperature is High")
        elif temperature <= 25 and temperature >= 10:
            alert("Temperature is Low")
        elif temperature <= 10:
            alert("Temperature is Very Low")
        else:
            alert("Normal Temperature")
        if humidity > 80:
            alert("Humidity is Very High")
        elif humidity > 50:
            alert("Humidity is High")
        elif humidity < 30:
            alert("Humidity is Low")
        else:
            alert("Moderate Humidity")
            
if __name__ == "__main__":
    start_monitoring()
