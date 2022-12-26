from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True) 
    mail = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=True, nullable=False)
    token = db.Column(db.String(120), unique=True, nullable=False)
    def repr(self):
        return f"User('{self.id}','{self.mail}','{self.password}','{self.token}')"

    def serialize(self):
        return {
            "id": self.id,
            "mail": self.mail,
            "password": self.password,
            "token": self.token
        }