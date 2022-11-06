import base64
import io

from flask import Flask, request
from flask_cors import CORS, cross_origin
from PIL import Image, ImageGrab

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/get_picture', methods=['POST'])
def send_email():
    received_message = request.get_json()
    buffer = io.BytesIO()
    im = ImageGrab.grab()
    im.save(buffer, format='JPEG')
    im.close()
    b64_str = base64.b64encode(buffer.getvalue())
    b64_str = str(b64_str).replace("b'", "").replace("'", "")
    b64_str = "data:image/JPEG;base64," + b64_str
    return {"Image": [str(f"{b64_str}")]}


def spawn_picture():
    app.run(host="Mac-Mini", port=5000, debug=False)
