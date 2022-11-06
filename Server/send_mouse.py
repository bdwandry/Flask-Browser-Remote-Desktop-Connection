from flask import Flask, request
from flask_cors import CORS, cross_origin
import pyautogui
from screeninfo import get_monitors

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/send_coordinates', methods=['POST'])
def send_coordinates():
    received_message = request.get_json()
    print(received_message)
    m = get_monitors()[0]
    print(m)
    # pyautogui.moveTo(received_message["X"] * m.width, received_message["Y"] * m.height)
    pyautogui.click(received_message["X"] * m.width, received_message["Y"] * m.height)
    return {"Image": ["HI"]}

def spawn_mouse():
    app.run(host="Mac-Mini", port=5050,debug=False)