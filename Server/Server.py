import base64
import io
import time

from flask import Flask, request
from flask_cors import CORS, cross_origin
from PIL import Image, ImageGrab
import pyautogui

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/send_coordinates', methods=['POST'])
def send_coordinates():
    received_message = request.get_json()
    print(received_message)
    pyautogui.moveTo(received_message["X"], received_message["Y"])
    return {"Image": ["HI"]}


@app.route('/get_picture', methods=['POST'])
def send_email():
    received_message = request.get_json()
    buffer = io.BytesIO()
    im = ImageGrab.grab()
    im.save(buffer, format='PNG')
    im.close()
    b64_str = base64.b64encode(buffer.getvalue())
    b64_str = str(b64_str).replace("b'", "").replace("'", "")
    b64_str = "data:image/PNG;base64," + b64_str
    return {"Image": [str(f"{b64_str}")]}


if __name__ == "__main__":
    app.run(host="localhost", port=5001, debug=True)
