import random

def send_alert(msg):
    print(msg)

def read_humidity():
    return random.randint(10, 100)

def read_temperature():
    return random.randint(0, 100)
    
def monitor_temp_humid():
    while True:
        temperature = read_temperature()
        humidity = read_humidity()
        if temperature >= 40:
            send_alert("High Temperature Detected")
        if humidity >= 50:
            send_alert("High Humidity Detected")
            
if __name__ == "__main__":
    monitor_temp_humid()
