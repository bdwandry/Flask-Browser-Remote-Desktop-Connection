# Flask-Browser-Remote-Connection
This is a crappy example/implementation of creating remote connection through a browser that allows a user to control their PC. 
This is terrible by design and is just a proof of concept for myself to see how difficult it was to get something like this working. 
This really does not work well, I have it set to output at max 2 FPS. 
Also if this deployed outside of a private network, I'm sure it would be a HUGE SECURITY RISK.

(This project was inspired by Apache Guacamole Project - Being able to RDP, VNC, SSH, etc in the Browser is cool. Give the people who develop that project a huge shoutout. )
__________________________________________________
Project Functions: 
This project doesn't implement any VNC or RDP technology. It's way more simpler than that and it does not run smoothly at all. 
When developing this proof of concept, I was thinking at the most fundemental level of what actually "video" is. 
Just a culmination of pictures running in rapid succession to symbolically trick the brain that there is motion. 
This same principle can applied to screens and remote controlling pc's. 
This code does not do any form of optimization, so it has a high data use. 

So how this Project Functions is that there is a client/server situation:
  * The Front-End (client side) is just a basic ReactJS Web-App. It's job is to display an oncoming image, intercept keyboard inputs, & track mouse             location/clicks on the image being presented on screen. Once one of these events occur, it will ping the backend server. The front end will                 automatically scale the image to fit the browser window, so it may stretch the screen, but by doing this we can guarentee the mouse coordinates will       work when pressing on the image being presented. Mouse coordinates being returned to the backend server are within' a ratio between 0-1 (as a decimal       value). I took the mouse location clicked on the image being returned by the server computer and then divided it by the full image size rendered on         screen. The backend server then intercepts this ratio and then multiplies by the actual screen resolution set on the device. 
    
  * The Backend Server is a simple Flask Server(with CORS Implemented) that intercepts the front-end request and response them with an action on the host 
    computer. The Front-End will auto-ping the backend server every 500 ms (2 times a second or 2 FPS). The backend intercepts that request, takes a 
    screenshot of the host operating system and return the image back as a base64 format (told yah it was jank). It will also do similar things for mouse 
    input and keyboard events.
   

Features: 
  * Remote PC will desktop will appear in Browser Tab
  
  * Left Mouse Click on a Specific Coordinates and mouse will actually click on those specific coordinates on the server-pc
  
  * Basic keyboard input, a user can type and those mouse events are sent from the browser window to the backend server to be processes 
    (this is glitchy - stick to only using simple keyboard inputs & do not type too fast)

__________________________________________________
Setting up:
* If someone is brave enought to set this up:
  1. Run the Following (Make sure to have python 3.10+ and nodejs 19.x installed)
  ```
     git clone git@github.com:bdwandry/Flask-Browser-Remote-Connection.git
     cd Flask-Browser-Remote-Connection\Server
     python -m venv ./venv
     venv\Scripts\activate.bat
     pip install -r requirements.txt
     cd ..
     cd Client
     npm install
  ```
  2. Two things need to be edited inside code (I'd just reccomend grabbing hostname on the computer)
    Change: Server.py, in the main change "host" to your host name of you're computer
    Change: get_picture.js, change all the axios hostname calls to the yours.
    
 Complete.
 Once everything is setup, start the Flask and Reactjs Servers on a secondary computer and then go your `host-computers-name:3000` in the browser.
 Start controlling
