
# A very simple Flask Hello World app for you to get started with...

from flask import Flask
from flask import render_template
from flask.ext.social import Social
from flask.ext.social.datastore import SQLAlchemyConnectionDatastore

app = Flask(__name__)
app.config['SOCIAL_FACEBOOK'] =
{
	'consumer_key': 1383224128630529,
	'consumer_secret': 471c63bffbd3e3da00504a50035cd67b
}

app.config['SECURITY_POST_LOGIN'] = '/profile'

db = SQLAlchemy(app)

class Connection(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    provider_id = db.Column(db.String(255))
    provider_user_id = db.Column(db.String(255))
    access_token = db.Column(db.String(255))
    secret = db.Column(db.String(255))
    display_name = db.Column(db.String(255))
    profile_url = db.Column(db.String(512))
    image_url = db.Column(db.String(512))
    rank = db.Column(db.Integer)

Security(app, SQLAlchemyUserDatastore(db, User, Role))
Social(app, SQLAlchemyConnectionDatastore(db, Connection))

@app.route('/')
def hello_world():
    return render_template('iframe.html')

@app.route('/profile')
@login_required
def profile():
    return render_template(
        'profile.html',
        content='Profile Page',
        facebook_conn=social.facebook.get_connection(),

