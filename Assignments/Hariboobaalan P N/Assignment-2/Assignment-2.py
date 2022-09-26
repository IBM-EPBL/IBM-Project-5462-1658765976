import random

def alert(msg):
    print(msg)

def read_humidity_from_sensor():
    return random.randint(10, 100)

def read_temperature_from_sensor():
    return random.randint(-100, 100)
    
def start_tracking():
    while True:
        temperature = read_temperature_from_sensor()
        humidity = read_humidity_from_sensor()
        if temperature >= 40:
            alert("High Temperature")
        elif temperature <= 25 and temperature >= 10:
            alert("Low Temperature")
        elif temperature <= 10:
            alert("Very Low Temperature")
        else:
            alert("Normal Temperature")
        if humidity >= 80:
            alert("Very High Humidity")
        elif humidity >= 50:
            alert("High Humidity")
        elif humidity <= 30:
            alert("Low Humidity")
        else:
            alert("Moderate Humidity")
            
if __name__ == "__main__":
    start_tracking()
