# Gas Leakage Monitoring And Alerting System for Industries
# Team ID - PNT2022TMID19226

## **About :** 
> ##### Gas leakage is the main problem of the industrial sectors working with highly inflammable gases. Gas Leakage fires took an increasing toll on lives and property in recent years. The leakage of gases only can be detected by human nearby and if there are no human nearby, it cannot be detected. But sometimes it cannot be detected by human who has a low sense of smell. Therefore, in such cases Industries are in need of a Gas Leakage Detection System for gas leakage identification and to perform certain measures in order to reduce the impact incase of any fire and to alert people/workers about the gas leakage.

> ## **Demo Video** *(Click below image to play video)*
[![Demo Video](https://i.ibb.co/b35DM4Z/PNT2022-TMID19226.png)](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/blob/main/Final%20Deliverables/PNT2022TMID19226_Final-Demo.mp4)

## **Web-App -**  [Gas Leakage Monitoring and Alerting System for Industries](https://monitor-gas-leakage.web.app/)
> ### *(Click on the above link to open web-app)*
## **Features**
*   Sign Up and Login to Web App.
*   Sign Up using Google Login.
*   Sign Up using Facebook Login.
*   The user can view the status of the gas sensors.
*   The user is prompted with an alert message incase of any gas leakage detection.
*   The user is notified with a alert SMS message to mobile.


##**Screenshots**
### 1.   Web dashboard
![](https://raw.githubusercontent.com/IBM-EPBL/IBM-Project-5462-1658765976/main/Final%20Deliverables/Web%20App/Web%20Dashboard.png?raw=true)
### 2.   Web Alert
![](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/blob/main/Final%20Deliverables/Web%20App/Web%20Alert.png?raw=true)


## **Wokwi Platform Simulation -** [Gas Leakage Detection & Monitoring System Simulation](https://wokwi.com/projects/347054810744226388)

> ### Note: As Gas sensor is not available in Wokwi Platform, Slide Potentiometer is used.

*   Slide Potentiometer is used to set the level of gas leakage.
*   DHT Sensor is used to set the increase/decrease in level of Humidity and Temperature.
*  The data is sent to IBM IoT Watson Platform and rendered to dashboard using Node-RED.

> ### If Gas Leakage is detected,

*   The system automatically turns ON the exhaust fans. 
*   An alarm is set off to alert the workers of the industry. 
*   The system automatically closes the gas valve.
*   WebUI Alert notification is displayed to the user.
*   SMS Alert is sent to the user's registered Phone Number
## **Screenshots**
### 1.   Wokwi Simulation
![](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/blob/main/Final%20Deliverables/Wokwi%20Simulation/Wokwi%20Simulation.png?raw=true)
### 2.   Wokwi Actuators Working
![](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/blob/main/Final%20Deliverables/Wokwi%20Simulation/Valve%20Close%2C%20Alarm%2C%20Exhaust%20Fan.png?raw=true)
### 3.   Wokwi Terminal Output
![](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/blob/main/Final%20Deliverables/Wokwi%20Simulation/Wokwi%20Terminal%20Output.png?raw=true)



## **Python Automation -** [Python Code](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/blob/main/Project%20Development%20Phase/Sprint%201/PNT2022TMID19226%20-%20Python%20Automation/Python%20Automation%20Code.py)
### Install the required python packages mentioned in the requirements.txt
>  **pip install -r requirements.txt**

*   Tkinter Python GUI is used to set the **Gas level**, **Temperature level** and **Humidity level**. 
*   The data is sent to IBM IoT Watson Platform and rendered to dashboard using Node-RED.

> ### If Gas level increases the threshold value,

*   WebUI Alert notification is displayed to the user.
*   SMS Alert is sent to the user's registered Phone Number.
## **Screenshots**
### 1.   Python GUI
![](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/blob/main/Final%20Deliverables/Python%20Automation/Python%20GUI.png?raw=true)
### 2.   Python Terminal Output
![](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/blob/main/Final%20Deliverables/Python%20Automation/Python%20Code%20Terminal%20Output.png?raw=true)


## **Mobile Application -** [Mobile APK](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/raw/main/Project%20Development%20Phase/Sprint%204/PNT2022TMID19226.apk)

*   The user can monitor the gas leakage detection system realtime.

## **Screenshots**
### 1.   Mobile APK
![](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/blob/main/Final%20Deliverables/Mobile%20Application/Mobile%20App%20HTTP%20Request.jpg?raw=true)
