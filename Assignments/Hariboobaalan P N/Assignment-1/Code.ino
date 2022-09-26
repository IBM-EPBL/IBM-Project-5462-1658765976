#include<Servo.h>

Servo doorlock;
#define light 11
#define photoresistor A1
#define buzzer 5
#define ultrasonic 2
#define temperature A0
#define door 4
#define fan 6

void setup()
{
  Serial.begin(9600);
  pinMode(light,OUTPUT);
  pinMode(fan,OUTPUT);
  pinMode(door,INPUT);
  pinMode(buzzer,OUTPUT);
  pinMode(ultrasonic,INPUT);
  pinMode(photoresistor,INPUT);
  pinMode(temperature,INPUT);
  doorlock.attach(door);
}

void loop()
{
  pinMode(ultrasonic, OUTPUT);
  digitalWrite(ultrasonic, LOW);
  delayMicroseconds(2);
  digitalWrite(ultrasonic, HIGH);
  delayMicroseconds(5);
  digitalWrite(ultrasonic, LOW);
  pinMode(ultrasonic, INPUT);
  
  long distance = pulseIn(ultrasonic, HIGH)/148;
  
  // If a person comes near the door, the door lock automatically opens.
  // A buzzer sound is made to notify about an incoming person.
  // And once the person moves in, the door automatically closes.
  if(distance<=30){
    doorlock.write(90);
    delay(1000);
    digitalWrite(buzzer,HIGH);
  }
  else{
    doorlock.write(0);
    digitalWrite(buzzer,LOW);
  }
  
  long lightIntensity = analogRead(photoresistor);
  
  // If it is daytime the lights are OFF.
  // If it is night time the light get turned ON automatically.
  if(lightIntensity<225){
    digitalWrite(light,HIGH);
  }
  else{
    digitalWrite(light,LOW);
  }
  
  long roomTemperature = (analogRead(temperature)/1024.0)*500;
  
  // If the room temperature is greater than 40 degree Celsius then the Fan gets turned ON automatically.
  // Else the fan is turned OFF.
  Serial.println(roomTemperature);
  if(roomTemperature>40){
    digitalWrite(fan,HIGH);
  }
  else{
    digitalWrite(fan,LOW);
  }
}



