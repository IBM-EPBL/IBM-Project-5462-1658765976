# Gas Leakage Monitoring And Alerting System for Industries
# Team ID - PNT2022TMID19226

## **About :** 
> ##### Gas leakage is the main problem of the industrial sectors working with highly inflammable gases. Gas Leakage fires took an increasing toll on lives and property in recent years. The leakage of gases only can be detected by human nearby and if there are no human nearby, it cannot be detected. But sometimes it cannot be detected by human who has a low sense of smell. Therefore, in such cases Industries are in need of a Gas Leakage Detection System for gas leakage identification and to perform certain measures in order to reduce the impact incase of any fire and to alert people/workers about the gas leakage.



## **Web-App -**  [Gas Leakage Monitoring and Alerting System for Industries](https://monitor-gas-leakage.web.app/)
> ### (Click on the above link to open web-app)

*   Sign Up and Login to Web App
*   The user can view the status of the gas sensors.
*   The user is prompted with an alert message incase of any gas leakage detection.


## **Wokwi Platform Simulation -** [Gas Leakage Detection](https://wokwi.com/projects/347054810744226388)

> ### Note: As Gas sensor is not available in Wokwi Platform, Slide Potentiometer is used.
*   Slide Potentiometer is used to set the level of gas leakage.
*   DHT Sensor is used to set the increase/decrease in level of Humidity and Temperature.
*  The data is sent to IBM IoT Watson Platform and rendered to dashboard using Node-RED.

> ### If Gas Leakage is detected,
*   The system automatically turns ON the exhaust fans. 
*   An alarm is set off to alert the workers of the industry. 
*   The system automatically closes the gas valve.


## **Python Automation -** [Python Code](https://github.com/IBM-EPBL/IBM-Project-5462-1658765976/tree/main/Project%20Development%20Phase/Sprint%201/PNT2022TMID19226%20-%20Python%20Automation)
### Install the required python packages mentioned in the requirements.txt
>  pip install -r requirements.txt



*   Tkinter Python GUI is used to set the **Gas level**, **Temperature level** and **Humidity level**. 
*   The data is sent to IBM IoT Watson Platform and rendered to dashboard using Node-RED.

