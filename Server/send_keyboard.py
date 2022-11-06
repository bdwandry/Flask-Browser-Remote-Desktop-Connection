import keyboard

from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/send_key', methods=['POST'])
def send_key():
    received_message = request.get_json()
    print(received_message)
    keyboard.press(received_message["Character"])
    return {"Image": ["HI"]}


def spawn_keyboard():
    app.run(host="Mac-Mini", port=5025, debug=False)
