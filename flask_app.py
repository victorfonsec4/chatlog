# A very simple Flask Hello World app for you to get started with...

from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def chatlog():
    return render_template('iframe.html')

if __name__ == "__main__":
    app.run()

