#include<Servo.h>

Servo smartdoor;
#define photoresistor A0
#define light 13
#define temp_sensor A1
#define fan 2
#define ultrasonic_sensor 4
#define door 3
#define alarm 5

void setup()
{
  Serial.begin(9600);
  pinMode(photoresistor,INPUT);
  pinMode(light,OUTPUT);
  pinMode(temp_sensor,INPUT);
  pinMode(fan,OUTPUT);
  pinMode(ultrasonic_sensor,INPUT);
  pinMode(door,INPUT);
  pinMode(alarm,OUTPUT);
  smartdoor.attach(door);
}

void loop()
{
  // Code for Smart Light
  long lightIntensity = analogRead(photoresistor);
  
  // If it is bright the light OFF.
  // If it is dark the light gets turned ON.
  if(lightIntensity < 225) {
    digitalWrite(light, HIGH);
  }
  else {
    digitalWrite(light, LOW);
  }

  // Code for Smart Fan
  long roomtemp_sensor = (analogRead(temp_sensor)/1024.0)*500;
  
  // If the room temp_sensor is greater than 40 degree Celsius then the Fan gets turned ON.
  // Else the fan is turned OFF.

  Serial.println(roomtemp_sensor);
  if(roomtemp_sensor > 40) {
    digitalWrite(fan, HIGH);
  }
  else {
    digitalWrite(fan, LOW);
  }

  // Code for Smart Door
  pinMode(ultrasonic_sensor, OUTPUT);
  digitalWrite(ultrasonic_sensor, LOW);
  delayMicroseconds(2);
  digitalWrite(ultrasonic_sensor, HIGH);
  delayMicroseconds(5);
  digitalWrite(ultrasonic_sensor, LOW);
  pinMode(ultrasonic_sensor, INPUT);
  
  long distance = pulseIn(ultrasonic_sensor, HIGH)/148;
  
  // If a person comes close to the door, the door opens.
  // A alarm sound will notify about an incoming person.
  // Once the person moves in, the door closes automatically.

  if(distance<=30){
    smartdoor.write(90);
    delay(1000);
    digitalWrite(alarm, HIGH);
  }
  else{
    smartdoor.write(0);
    digitalWrite(alarm, LOW);
  }    
}