# A very simple Flask Hello World app for you to get started with...

from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def chatlog():
    return render_template('iframe.html')

@app.route('/getChat')
def getChat():
	return render_template('getchat.html')

if __name__ == "__main__":
    app.run(DEBUG=True)

